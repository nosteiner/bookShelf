import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../Book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../books.service';
import { element } from 'protractor';


export interface DialogData {
  isNew : Boolean;
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
    this.isNewBook = this.dialogData.isNew;
    this.book = this.dialogData.book;

    // let bookIndex = this.booksService.books.findIndex(element => element.id == this.dialogData.book.id)
    // if(bookIndex == -1){
    //   this.book = new Book();
    // }
    // else{
    //   this.book = this.booksService.books[bookIndex]
    // }
    



    this.bookEdit = fb.group({
      title: [this.book.title, Validators.required],
      year: [this.book.year, Validators.required],
      authors: [this.book.authors, Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.book)
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


