import { Component, OnInit } from '@angular/core';
import { NotImplementedComponent } from '../../components/globals/not-implemented/not-implemented.component';
import { MatDialog } from '@angular/material';
import { NavigationService } from '../../services/navigation.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(
    private dialog: MatDialog,
    private navigationService: NavigationService,
    private authenticationService: AuthenticationService) {
      this.user = this.authenticationService.currentUserValue;
     }

  ngOnInit() {
  }
  notImplementedYet() {
    const dialogRef = this.dialog.open(NotImplementedComponent, {
      width: '70%',
      hasBackdrop: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
