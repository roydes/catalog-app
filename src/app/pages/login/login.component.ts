import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User} from '../../interfaces/interfaces';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationService} from '../../services/navigation.service';
import { AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl = 'dashboard';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    public navigationService: NavigationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue !== null) {
      this.navigationService.goToDashboard();
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const formValue = this.loginForm.value;
    const username = formValue['username'];
    const password =  formValue['password'];
    this.authenticationService.login(<User>{username: username, password: password})
      .pipe(first())
      .subscribe(user => this.navigationService.goToDashboard(),
        error => {
          if (error instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>error).status) {
              case 400:
                console.error('Wrong password!');
                break;
              case 404:
                console.error('The user does not exist!');
                break;
              default:
              console.error('Something went wrong!');
            }
          } else {
            console.error('Something went wrong!');
          }
        });
  }
}
