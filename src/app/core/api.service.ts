import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTabs(): Observable<any> {
    return this.http.get('./assets/api.json').pipe(map((res: any) => {
      return res.tabs;
    }));
  }

  getDropdown(): Observable<any> {
    return this.http.get('./assets/api.json').pipe(map((res: any) => {
      return res.dropdown;
    }));
  }

  getTools(): Observable<any> {
    return this.http.get('./assets/api.json').pipe(map((res: any) => {
      return res.tools;
    }));
  }

  getItems(): Observable<any> {
    return this.http.get('./assets/api.json').pipe(map((res: any) => {
      return res.items;
    }));
   }

   getChart(): Observable<any> {
    return this.http.get('./assets/api.json').pipe(map((res: any) => {
      return res.chart;
    }));
   }

}
