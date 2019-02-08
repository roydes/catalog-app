import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(mergeMap(() => {
            if (request.url.startsWith(environment.api_base) && request.url.endsWith('/login/') && request.method === 'POST') {
                if ('admin' === request.body.get('username') && 'admin' === request.body.get('password')) {
                    const body = {
                        id: 1,
                        username: request.body.get('username'),
                        password: request.body.get('password'),
                        token: 'fake-jwt-token',
                        name: 'Roides Javier',

                    };
                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }
            return next.handle(request);
        }))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
