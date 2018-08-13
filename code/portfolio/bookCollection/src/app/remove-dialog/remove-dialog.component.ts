import { Component, OnInit, Inject } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../Book';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  book: Book;
}

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {
  book : Book;

  constructor(private booksService: BooksService,  public dialogRef: MatDialogRef<RemoveDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) { 
    this.book = this.dialogData.book;
  }

  ngOnInit() {
    
  }

  removeBookHandler(){
    this.booksService.removeBook(this.book.id)
    this.close();
  }

  close(){
    this.dialogRef.close();
  }
}
