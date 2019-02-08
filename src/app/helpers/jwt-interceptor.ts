import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  static isNonEmptyString(str: string): boolean {
    return str && str.length > 0 && str !== 'null'; // Or any other logic, removing whitespace, etc.
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (req.url.startsWith(environment.api_base) && !req.url.endsWith('/login')) {
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser && JwtInterceptor.isNonEmptyString(currentUser.token)) {
        let headers = req.headers;
        headers = headers.append('Authorization', currentUser.token);
        req = req.clone({headers: headers});
      }
    }
    return next.handle(req);
  }
}
