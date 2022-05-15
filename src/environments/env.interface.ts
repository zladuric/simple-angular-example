import { BackendConfig } from '../app/core/backend/config/backend-config';
import { AuthConfig, OAuthModuleConfig } from 'angular-oauth2-oidc';

export interface Env {
  authModuleConfig: OAuthModuleConfig;
  production: boolean;
  backendConfig: BackendConfig;
  authConfig: AuthConfig,
}
