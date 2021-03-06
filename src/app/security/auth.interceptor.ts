import {HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthStorageService} from './auth-storage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: AuthStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken: string = this.token.getToken();
    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `${authToken}`
      }
    });
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
];
