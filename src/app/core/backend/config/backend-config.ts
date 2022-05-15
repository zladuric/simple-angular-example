import { InjectionToken } from '@angular/core';

export interface BackendConfig {
  apiUrl: string;
  withAuth: boolean;
}

export const BACKEND_CONFIG_PROVIDER_TOKEN = new InjectionToken<BackendConfig>('Backend Config');
