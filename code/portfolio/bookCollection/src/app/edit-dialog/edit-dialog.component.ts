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
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
book = new Book();
bookEdit: FormGroup;


  constructor(private booksService: BooksService, public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) {
    this.book = data;
    
    this.bookEdit = fb.group({
      title: [this.book.title, Validators.required],
      year: [this.book.year, Validators.required],
      author: [this.book.authors, Validators.required],
      id: [this.book.id],
      img: [this.book.img]
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    let isNewBook: boolean = false;
    if(this.book.id == null){
      isNewBook = true;
      this.book = this.bookEdit.value;
      this.book.id = this.booksService.books.length;
      this.book.img = "https://i.pinimg.com/564x/7a/22/76/7a22768b8614eedca08e86c0e333b96c.jpg"
    }else{
      this.book = this.bookEdit.value;
    }
    console.log(this.book.id, this.book, isNewBook)
    this.booksService.updateBook(this.book.id, this.book, isNewBook)
    this.close();
  }
  

  close() {
    this.dialogRef.close();
  }
}


