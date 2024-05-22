


import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*', 
        'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf', 
      },
    });

    return next.handle(modifiedRequest);
  }
}
