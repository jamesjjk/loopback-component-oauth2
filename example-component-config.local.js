module.exports = {
  "loopback-component-oauth2": {
    "dataSource": "db",
    "loginPage": "/login",
    "loginPath": "/login",
    "authorizationServer": true,
    "resourceServer": true,
    "flashFailure": true,
    "providers": {
      "google": {
        "module": "passport-google-oauth",
        "strategy": "OAuth2Strategy",
        "clientID": "***",
        "clientSecret": "***",
        "callbackURL": "/auth/google/callback",
        "callbackPath": "/auth/google/callback",
        "authPath": "/auth/google",
        "scope": ["profile", "email"]
      }
    }
  }
}
