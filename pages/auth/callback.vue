<template>
  <div />
</template>
<script>
import * as Mgr from '~/services/app';
/* eslint-disable */ 
export default {
  created () {
    const mgr = Mgr.InitMgr({
      loadUserInfo: true,
      response_mode: 'query'
    })
    // eslint-disable-next-line nuxt/no-globals-in-created
    mgr.signinRedirectCallback().then(function (user) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.location = '/'
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>
