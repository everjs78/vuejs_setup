<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Vertical class="component login-form" base="fill">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </Vertical>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Vertical } from "@aergoenterprise/lib-components/src/layout";

import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
.component.login-form {
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;

  .logo {
    margin: 20px 0 56px;
  }
  .dialog-title {
    margin-bottom: 32px;
  }
  .username,
  .password {
    margin-bottom: 16px;
  }
  .login-button {
    margin-top: 32px;
  }
}
</style>
