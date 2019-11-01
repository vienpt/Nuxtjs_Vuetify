/* eslint-disable */
import * as Mgr from '~/services/app'

const mgr = Mgr.InitMgr()

/*
** use state to call state
*/
export const state = () => ({
  userInfo: []
})

export const getters = {
  getUser (state) {
    return state.userInfo
  }
}

/*
** use commit to call mutations fucntion
*/
export const mutations = {
  SET_USER (state, data) {
    state.userInfo = data
    console.log('store userinfo', state.userInfo)
  }
}

/*
** use dispatch to call action fucntion
*/
export const actions = {
  // async nuxtServerInit ({ dispatch }, { req }) {
  //   await dispatch('getSignedIn')
  // },
  signIn () {
    mgr.signinRedirect()
  },
  signOut () {
    mgr.signoutRedirect()
  },
  async getSignedIn ({ commit, dispatch }, params) {
    await mgr.getUser().then(function (user) {
      if (user === null) {
        dispatch('signIn')
      }
      commit('SET_USER', { ...user })
    }).catch(function (err) {
      console.log(err)
    })
  },
  async renewToken ({ commit, dispatch }, params) {
    await mgr.signinSilent().then(function (user) {
      if (user == null) {
        dispatch('getSignedIn')
        // commit('SET_USER', { ...user })
      } else {
        commit('SET_USER', { ...user })
        console.log('renew token log', user)
      }
    }).catch(function (err) {
      console.log(err)
    })
  }
}
