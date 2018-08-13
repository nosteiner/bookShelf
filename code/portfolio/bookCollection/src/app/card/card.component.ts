import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../Book';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  @Input() book: Book = new Book
  ngOnInit() {
  }



  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: {book: this.book,
        isNew: false 
      }
    });
  }

  openRemoveDialog(): void {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '250px',
      data: this.book
    });
  }
}



