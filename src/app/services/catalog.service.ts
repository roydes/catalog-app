import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_urls, api_base } from '../../environments/environment';
import { Catalog } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url: string;
  endpoint: string;
  constructor(protected httpClient: HttpClient) {
    this.url = api_base;
    this.endpoint = api_urls.catalogs;
   }
  fetch (imageId: number) {
    return this.httpClient.get<Catalog>(`${this.url}/${this.endpoint}/${imageId}`);
  }
}

