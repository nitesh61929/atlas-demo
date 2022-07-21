import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticateEndpoint="https://testapi.techcellence.com/auth/local"

  constructor(private http:HttpClient) { }

  public authenticate(authPayload:IAuth){
    return this.http.post(this.authenticateEndpoint,authPayload);
  }

  public saveToken(token:string){
    localStorage.setItem("token",token)
  }

  public clearStorage(){
    localStorage.clear();
  }
}
