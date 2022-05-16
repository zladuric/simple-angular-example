import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { AuthService } from './core/backend/services/auth.service';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'bram-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isAuthenticated!: Observable<boolean>;
  private isDoneLoading!: Observable<boolean>;
  private canActivateProtectedRoutes!: Observable<boolean>;

  constructor(private authService: AuthService) {
    if (environment.backendConfig.withAuth) {
      // authService.initLoginFlow();
      this.authService.initialize();
      this.isAuthenticated = this.authService.isAuthenticated$;
      this.isDoneLoading = this.authService.isDoneLoading$;
      this.canActivateProtectedRoutes = this.authService.canActivateProtectedRoutes$;

      this.authService.runInitialLoginSequence();
    } else {
      console.warn('Localhost, no auth service.');
    }


  }
  login() { this.authService.login(); }
  logout() { this.authService.logout(); }
  refresh() { this.authService.refresh(); }
  reload() { window.location.reload(); }
}
