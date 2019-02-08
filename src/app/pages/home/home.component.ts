import { Component, OnInit } from '@angular/core';
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
    private navigationService: NavigationService,
    private authenticationService: AuthenticationService) {
      this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }
}
