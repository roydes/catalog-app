import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-not-implemented-detail',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.scss']
})
export class NotImplementedComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NotImplementedComponent>,
    @Inject(MAT_DIALOG_DATA) public repository: any,
  ) { }

  ngOnInit() {
  }
}
