import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { secret_key , api_base} from '../../environments/environment';
import { map } from 'rxjs/operators';

export const KEY_USER = secret_key + 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  private LOGIN_URL = api_base + '/login/';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(KEY_USER)));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }

  static setUser(user: User) {
    localStorage.setItem(KEY_USER, JSON.stringify(user));
  }

  login(user: User): Observable<User> {
    let body = new HttpParams();
    body = body.append('username', user.username);
    body = body.append('password', user.password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<User>(this.LOGIN_URL, body, httpOptions)
      .pipe(
        map(authUser => {
          AuthenticationService.setUser(authUser);
          this.currentUserSubject.next(authUser);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem(KEY_USER);
    this.currentUserSubject.next(null);
  }
}
