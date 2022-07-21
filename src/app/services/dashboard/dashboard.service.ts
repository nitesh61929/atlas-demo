import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private bookEndpoint="https://testapi.mindware.us/books"

  constructor(private http:HttpClient) { }

  public getBooks(){
    // let headers = new HttpHeaders();
    // headers = headers.append('Bearer_Token', `Bearer `);
    return this.http.get(this.bookEndpoint)
  }
}
