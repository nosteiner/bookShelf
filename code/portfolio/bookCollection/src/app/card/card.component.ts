import { Component, OnInit, Input,  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Book } from '../Book';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import { faTimes  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // fortawesome
  faTimes = faTimes;

  constructor(public dialog: MatDialog) { }

  @Input() book: Book = new Book
  ngOnInit() {
  }


  
  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '50%',
      data: this.book
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
      
    // });
  }


}



