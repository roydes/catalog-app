import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_urls, api_base } from '../../environments/environment';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;
  endpoint: string;
  constructor(protected httpClient: HttpClient) {
    this.url = api_base;
    this.endpoint = api_urls.users;
   }
  fetch () {
    return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`);
  }
}

