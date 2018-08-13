import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../Book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../books.service';


export interface DialogData {
   id : number;
   title : string;
   authors: string;
   year :  Number;
   img : string;
   isInit: boolean;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
book = new Book();
bookEdit: FormGroup;


  constructor(private booksService: BooksService, public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: DialogData, private fb: FormBuilder) {
   if(this.dialogData.isInit == true){
    this.book.edit(this.dialogData)
   }
   

    this.bookEdit = fb.group({
      title: [this.book.title, Validators.required],
      year: [this.book.year, Validators.required],
      authors: [this.book.authors, Validators.required]
    });
   }

  ngOnInit() {
   console.log(this.book)
  }

  onSubmit(){
   
    this.book.edit(this.bookEdit.value);
    this.booksService.updateBooksArray(this.book)
    this.close();
  }
  

  close() {
    this.dialogRef.close();
  }
}


