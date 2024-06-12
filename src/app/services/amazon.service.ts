import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AmazonWork } from '../models/works';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {
  private readonly API_KEY = 'pk_1025679b0a9cb20991049fef771d8263424b79eb';

  private works: AmazonWork[] = [];

  constructor(private http: HttpClient) {}

  getUrlResponse<T>(url: string) {
    const apiUrl = `https://jsonlink.io/api/extract?url=${url}&api_key=${this.API_KEY}`;
    return this.http.get<T>(apiUrl);
  }

  setWorks(works: AmazonWork[]) {
    this.works = works;
  }

  getWorks(): AmazonWork[] {
    return this.works;
  }
}
