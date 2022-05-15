import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_CONFIG_PROVIDER_TOKEN, BackendConfig } from '../config/backend-config';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient,
              @Optional() @Inject(BACKEND_CONFIG_PROVIDER_TOKEN) private config: BackendConfig,
              ) {}

  get<T>(url = ''): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}/${url}`);
  }

  post<T, ApiRes = T>(url = '', body = {}): Observable<ApiRes> {
    return this.http.post<ApiRes>(`${this.config.apiUrl}/${url}`, body);
  }
}
