import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { OAuthModule, ValidationHandler } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

import { BACKEND_CONFIG_PROVIDER_TOKEN, BackendConfig } from './config/backend-config';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    OAuthModule.forRoot(environment.authModuleConfig),
    HttpClientModule,
  ]
})
export class BackendModule {
  constructor(@Optional() @SkipSelf() parentModule?: BackendModule) {
    if (parentModule) {
      throw new Error('BackendModule is already loaded.');
    }
  }

  static forRoot(backendConfig: BackendConfig): ModuleWithProviders<BackendModule> {
    return {
      ngModule: BackendModule,
      providers: [
        BackendService,
        {
          provide: ValidationHandler,
          useClass: JwksValidationHandler
        },
        {
          provide: BACKEND_CONFIG_PROVIDER_TOKEN,
          useValue: backendConfig,
        }
      ]
    }
  }
}
