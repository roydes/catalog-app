import { Injectable } from '@angular/core';
import { NotImplementedComponent } from '../components/globals/not-implemented/not-implemented.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( private dialog: MatDialog ) { }

  notImplementedYet() {
    this.dialog.open(NotImplementedComponent, {
      width: '70%',
      hasBackdrop: true,
    });
  }
}
