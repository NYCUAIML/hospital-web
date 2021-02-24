import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-show-dialog',
  templateUrl: './show-dialog.component.html',
  styleUrls: ['./show-dialog.component.css']
})
export class ShowDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data.model);
    }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
