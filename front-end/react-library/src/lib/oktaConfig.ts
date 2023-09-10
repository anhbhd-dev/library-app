export const oktaConfig = {
  clientId: "0oab6fcyv7ucuktD85d7",
  issuer: "https://dev-52441913.okta.com/oauth2/default",
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: true,
};
