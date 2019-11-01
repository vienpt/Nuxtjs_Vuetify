<template>
  <div>
    Logout
  </div>
</template>

<script>
import * as Mgr from '~/services/app';
/* eslint-disable */ 
export default {
  created () {
    const mgr = Mgr.InitMgr()
    // eslint-disable-next-line nuxt/no-globals-in-created
    mgr.signoutRedirectCallback().then(function (user) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.location.href = '../logout.html'
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>
