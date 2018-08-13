import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Book } from '../Book';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  book: Book = new Book();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: {
        isNewBook: true,
        book : new Book()
      }
    });

  }
  
}
