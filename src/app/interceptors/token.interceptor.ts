import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedReq;
    const token=localStorage.getItem("token");
    if(token){
      modifiedReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
    }else{
      modifiedReq=request;
    }
    return next.handle(modifiedReq);
  }
}
