<template>
  <div>
    <v-app-bar app clipped-left flat>
      <HubLogo />
      <v-row class="ml-8" align="center" v-if="!loggined">
        <v-btn v-for="link in links" :key="link.label" text :to="link.to" active-class="nav-btn-label">
          <span class="subtitle-1 text-capitalize font-weight-light"> {{ link.label }}</span>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn small class="mx-2" color="primary" outlined width="100px" :to="loginLink.login.to">{{
          loginLink.login.label
        }}</v-btn>

        <v-btn small class="mx-2" color="primary" width="100px" :to="loginLink.login.to">{{
          loginLink.signUp.label
        }}</v-btn>
      </v-row>
      <v-row class="ml-8" align="center" v-else>
        <v-spacer></v-spacer>
        <v-btn icon class="ml-8">
          <v-icon dark>mdi-bell</v-icon>
        </v-btn>
        <Profile />
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import HubLogo from './HubLogo.vue';
import Profile from '@/views/project/Profile.vue';

export default {
  name: 'Header',
  components: {
    HubLogo,
    Profile,
  },
  props: {
    loggined: { type: Boolean, default: false }, // TODO get loginstatus
  },

  data: () => ({
    drawer: null,
    links: [
      {
        label: 'Document',
        to: 'document',
      },
      {
        label: 'Pricing',
        to: 'pricing',
      },
      {
        label: 'Support',
        to: 'support',
      },
    ],
    loginLink: {
      login: {
        label: 'Login',
        to: 'login',
      },
      signUp: {
        label: 'Signup',
        to: 'signup',
      },
    },
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
<style lang="scss">
@import '@/components/styles/variables.scss';
.nav-btn-label {
  color: red;
}
</style>
