import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_CONFIG_PROVIDER_TOKEN, BackendConfig } from '../config/backend-config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(BACKEND_CONFIG_PROVIDER_TOKEN) private config: BackendConfig) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.config.withAuth) {
      request = request.clone({
        headers: request.headers.set('Access-Control-Allow-Origin', '*'),
      });
    }
    return next.handle(request);
  }
}
