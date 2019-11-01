/* eslint-disable */

const getAuthToken = () => localStorage.getItem('token')
console.log('getAuthToken', getAuthToken)

export default function ({ $axios, redirect }) {
  $axios.setToken(getAuthToken, 'Bearer')
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if(error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
