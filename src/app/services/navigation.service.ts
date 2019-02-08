import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private alertService: AlertService) { }

  go(to: string, extras = {}) {
    this.router.navigate([to]);
  }
  /*
  * User routes
  */
  goToDashboard() {
    this.router.navigate(['/home']);
  }
  goToUsers() {
    this.router.navigate(['/users']);
  }

  /*
  * Catalog routes
  */
  goToCatalogs() {
    this.router.navigate(['/catalogs']);
  }

  /*
  * Flyers routes
  */
  goToFlyers(extras?: {}) {
    this.alertService.notImplementedYet();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
