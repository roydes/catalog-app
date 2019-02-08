import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../../environments/environment';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(environment.api_base) && !request.url.endsWith('/login')) {
      return next.handle(request)
        .pipe(catchError(err => {
          if (err.status === 401 && err.status === 400) {
            this.authenticationService.logout();
            location.reload(true);
          }
          return throwError(err);
        }));
    }
    return next.handle(request);
  }
}
