import { Env } from './env.interface';

export const environment: Env = {
  production: false,
  backendConfig: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    withAuth: false,
  },
  authConfig: {
    clientId: 'zwitscher',
    redirectUri: 'https://localhost:4200',
    useSilentRefresh: true,
    // requireHttps: false,
    oidc: false,
  },
  authModuleConfig: {
    resourceServer: {
      allowedUrls: ['https://localhost:4200', 'https://jsonplaceholder.typicode.com/'],
      sendAccessToken: true,
    },
  },
};
