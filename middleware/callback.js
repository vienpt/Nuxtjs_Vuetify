export default function initLogin ({ store, redirect, route }) {
  store.dispatch('getSignedIn');
}
