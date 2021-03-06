// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-component-oauth2
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.

var tokenDef = require('../../common/models/oauth-token.json');
var authorizationCodeDef =
  require('../../common/models/oauth-authorization-code.json');
var clientApplicationDef =
  require('../../common/models/oauth-client-application.json');
var permissionDef =
  require('../../common/models/oauth-permission.json');
var scopeDef =
  require('../../common/models/oauth-scope.json');

var scopeMappingDef =
  require('../../common/models/oauth-scope-mapping.json');

var userIdentityDef =
  require('../../common/models/oauth-user-identity.json');

// Remove proerties that will confuse LB
function getSettings(def) {
  var settings = {};
  for (var s in def) {
    if (s === 'name' || s === 'properties') {
      continue;
    } else {
      settings[s] = def[s];
    }
  }
  return settings;
}

module.exports = function(dataSource) {

  // "OAuth token"
  var OAuthToken = dataSource.createModel(
    tokenDef.name, tokenDef.properties, getSettings(tokenDef));

  // "OAuth authorization code"
  var OAuthAuthorizationCode = dataSource.createModel(
    authorizationCodeDef.name,
    authorizationCodeDef.properties,
    getSettings(authorizationCodeDef));

  // "OAuth client registration record"
  var OAuthClientApplication = dataSource.createModel(
    clientApplicationDef.name,
    clientApplicationDef.properties,
    getSettings(clientApplicationDef));

  // "OAuth permission"
  var OAuthPermission = dataSource.createModel(
    permissionDef.name,
    permissionDef.properties,
    getSettings(permissionDef));

  // "OAuth scope"
  var OAuthScope = dataSource.createModel(
    scopeDef.name,
    scopeDef.properties,
    getSettings(scopeDef));

  // "OAuth scope mapping"
  var OAuthScopeMapping = dataSource.createModel(
    scopeMappingDef.name,
    scopeMappingDef.properties,
    getSettings(scopeMappingDef));

  // "OAuth scope mapping"
  var OAuthUserIdentity = dataSource.createModel(
    userIdentityDef.name,
    userIdentityDef.properties,
    getSettings(userIdentityDef));

  return {
    OAuthToken: OAuthToken,
    OAuthAuthorizationCode: OAuthAuthorizationCode,
    OAuthClientApplication: OAuthClientApplication,
    OAuthPermission: OAuthPermission,
    OAuthScope: OAuthScope,
    OAuthScopeMapping: OAuthScopeMapping,
    OAuthUserIdentity: OAuthUserIdentity
  };
};
