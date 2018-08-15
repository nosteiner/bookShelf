import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../Book';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { BooksService } from '../books.service';


export interface DialogData {
  isNewBook : Boolean;
  book : Book;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  book : Book;
  bookEdit: FormGroup;
  isNewBook: Boolean;

  constructor(private booksService: BooksService, public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: DialogData, private fb: FormBuilder) {
    this.isNewBook = this.dialogData.isNewBook;
    this.book = this.dialogData.book;


  
    this.bookEdit = fb.group({
      title:  new FormControl(this.book.title,[Validators.required]),
      year: new FormControl(this.book.year,[Validators.required, Validators.pattern(/(18|19|20)\d\d$/g)]),
      authors: new FormControl(this.book.authors,[Validators.required])
    });
  }


 
 
  ngOnInit() {
   
  }

  onSubmit() {
    if (this.isNewBook == true) {
      this.book.initialize();
    }
    this.book.edit(this.bookEdit.value);
    this.booksService.updateBooksArray(this.book, this.isNewBook)
    this.close();
  }


  close() {
    this.dialogRef.close();
  }

}