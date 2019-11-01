/* eslint-disable */
import Oidc from 'oidc-client'

/*
** Ref: https://github.com/IdentityModel/oidc-client-js/wiki
*/

// Required Settings
const config = {
  userStore: new Oidc.WebStorageStateStore(),
  authority: 'http://localhost:5000', // The URL of the OIDC/OAuth2 provider.
  client_id: 'js_oauth',
  redirect_uri: 'http://localhost:7001/auth/callback',
  response_type: 'id_token token',
  scope: 'openid custom.profile sshpoc_api_s sshpoc_api_e.read_only',
  post_logout_redirect_uri: 'http://localhost:7001/',
  silent_redirect_uri: 'http://localhost:7001/auth/silentCallback',
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: false,
  loadUserInfo: true
}
const mgr = new Oidc.UserManager(config)

// export function by init contructor
export function InitMgr () {
  return mgr
}

// enable logging
Oidc.Log.logger = console
Oidc.Log.level = Oidc.Log.INFO

// Events
/*
** userLoaded: Raised when a user session has been established (or re-established).
*/
mgr.events.addUserLoaded(function (user) {
  console.log('New User Loaded：', arguments)
  console.log('Acess_token: ', user.access_token)
})

/*
** accessTokenExpiring: Raised prior to the access token expiring.
*/
mgr.events.addAccessTokenExpiring(function () {
  console.log('AccessToken Expiring：', arguments)
})

/*
** accessTokenExpired: Raised after the access token has expired.
*/
mgr.events.addAccessTokenExpired(function () {
  console.log('AccessToken Expired：', arguments)
  alert('Session expired. Going out!')
  mgr.signoutRedirect().then(function (resp) {
    console.log('signed out', resp)
  }).catch(function (err) {
    console.log(err)
  })
})

/*
** silentRenewError: Raised when the automatic silent renew has failed.
*/
mgr.events.addSilentRenewError(function () {
  console.error('Silent Renew Error：', arguments)
})

/*
** userSignedOut [1.1.0]: Raised when the user's sign-in status at the OP has changed.
*/
mgr.events.addUserSignedOut(function () {
  alert('Going out!')
  console.log('UserSignedOut：', arguments)
  mgr.signoutRedirect().then(function (resp) {
    console.log('signed out', resp)
  }).catch(function (err) {
    console.log(err)
  })
})
