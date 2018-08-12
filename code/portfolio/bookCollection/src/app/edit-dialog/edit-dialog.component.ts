import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../Book';

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

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.book = data;
   }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}


