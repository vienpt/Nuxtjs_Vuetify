<template>
  <!--eslint-disable-->
  <div>
  <v-tabs>
    <v-tab @click="getToken()">getToken</v-tab>
    <v-tab @click="renewToken()">renewToken</v-tab>
  </v-tabs>
  <h2>Information of Token</h2>
    <div class="table-responsive">
        <pre id="resultsToken"></pre>
    </div>
  </div>
</template>

<script scoped>
/* eslint-disable */
import * as Mgr from '~/services/app'

export default {
  name: 'token',
  data () {
    return {
      mgr: new Mgr.InitMgr()
    }
  },
  methods: {
    getToken () {
      this.mgr.getUser().then(
        token => {
          this.logToken(token)
        },
        err => {
          console.log(err)
      })
    },
    renewToken () {
      this.mgr.renewToken().then(
        newToken => {
          this.logToken(newToken)
        },
        err => {
          console.log(err)
      }) 
    },
    logApi () {
      document.getElementById('resultsApi').innerText = ''

      Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
          msg = 'Error: ' + msg.message
        } else if (typeof msg !== 'string') {
          msg = JSON.stringify(msg, null, 2)
        }
        document.getElementById('resultsApi').innerHTML += msg + '\r\n'
      })
    },
    logToken () {
      document.getElementById('resultsToken').innerText = ''

      Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
          msg = 'Error: ' + msg.message
        } else if (typeof msg !== 'string') {
          msg = JSON.stringify(msg, null, 2)
        }
        document.getElementById('resultsToken').innerHTML += msg + '\r\n'
      })

    }
  }
}
</script>
