import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

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
    this.router.navigate(['/not-implemente-yet']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
