<template>
  <v-menu bottom left offset-y max-height="calc(100% - 32px)" transition="slide-y-transition">
    <template v-slot:activator="{ attrs, on }">
      <v-avatar color="indigo" v-bind="attrs" v-on="on" size="32">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
    </template>

    <v-list dense nav>
      <v-list-item @click="$router.push({ name: 'project-main' })">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Dashboard </v-list-item-title>
      </v-list-item>

      <v-list-item @click="$router.push({ name: 'setting' })">
        <v-list-item-icon>
          <v-icon>mdi-account-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Settings </v-list-item-title>
      </v-list-item>

      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Logout </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Profile',
  data: () => ({
    menus: [
      {
        label: 'Dashboard',
        to: 'dashboard',
      },
      {
        label: 'Settings',
        to: 'settings',
      },
      {
        label: 'Logout',
        to: 'support',
      },
    ],
  }),
  methods: {
    logout() {
      console.log('logout called');

      this.$store
        .dispatch('authLogout', { rest: this.$rest })
        .then(() => {
          this.$router.push('login');
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
</script>

<style lang="scss"></style>
