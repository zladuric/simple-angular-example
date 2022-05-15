export const environment = {
  production: true,
  backendConfig: {
    apiUrl: 'https://jsonplaceholder.typicode.com/',
    withAuth: true,
  },
  authConfig: {
    clientId: 'zwitscher',
    redirectUri: 'http://localhost:4200',
    useSilentRefresh: true,
    requireHttps: true,
    oidc: false,
  },
  authModuleConfig: {
    resourceServer: {
      allowedUrls: ['http://localhost:4200', 'https://jsonplaceholder.typicode.com/'],
      sendAccessToken: true,
    },
  },
};
