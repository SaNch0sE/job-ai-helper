// TODO: Then, set the callback URL in your provider’s dashboard to https://app.com/{basePath}/callback/{id}

export default Object.freeze({
  id: "oidc", // signIn("my-provider") and will be part of the callback URL
  name: "OIDC Provider", // optional, used on the default login page as the button text.
  type: "oidc", // or "oauth" for OAuth 2 providers
  // TODO: Change to required provider URL
  issuer: "https://my.oidc-provider.com", // to infer the .well-known/openid-configuration URL
  clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
  clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
});