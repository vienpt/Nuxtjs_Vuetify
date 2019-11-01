<template>
  <v-app light>
    <!-- navigation bar -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="white"
      fixed
      app>
      <v-list>
        <v-list-item v-for="(item, i) in navigation" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2 float-right">
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- header -->
    <v-app-bar color="light-blue darken-3" :clipped-left="clipped" fixed app dark>
      <!-- left -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link class="toolbar-title-link" to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <!-- menu right -->
      <v-menu :close-on-content-click="true" :offset-y="true">
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <!-- <img src="" alt=""> -->
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ userName }}</v-list-item-title>
              <v-list-item-subtitle>Dev of Archway</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn color="error" text @click="$store.dispatch('signOut')">
            Signout
          </v-btn>
        </v-card-actions>
      </v-menu>
    </v-app-bar>
    <!-- main content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- footer page -->
    <v-footer :fixed="fixed" app>
      <span>Archway Factory &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as Mgr from '~/services/app';

export default {
  components: {},
  data () {
    return {
      mgr: new Mgr.InitMgr(),
      title: 'Nuxt_Vuetify',
      clipped: true,
      drawer: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      miniVariant: false,
      navigation: [
        {
          icon: 'mdi-account-box-multiple',
          title: 'Token',
          to: '/token'
        }
      ],
      userName: {}
    };
  },
  mounted () {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo () {
      await this.mgr
        .getUser()
        .then((user) => {
          if (user === null) {
            this.$store.dispatch('getSignedIn');
          } else {
            this.userName = user.profile.name;
          }
        })
        .catch((err) => {
          /* eslint-disable */
          console.log('user store err', err);
        });
    }
  }
};
</script>

<style lang="scss">
.toolbar-title-link {
  color: white !important;
  text-decoration: none !important;
}
</style>
