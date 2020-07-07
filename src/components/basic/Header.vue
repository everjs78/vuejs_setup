<template>
  <div>
    <v-app-bar app clipped-left>
      <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
      <v-btn icon class="ml-8">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-toolbar-title>Hub</v-toolbar-title>

      <!-- MenuLink 
      <v-row justify="center" no-gutters>-->
      <v-row class="ml-8">
        <v-btn
          v-for="link in links"
          :key="link"
          color="black"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-row>
      <v-spacer></v-spacer>

      <v-btn small class="mx-2" color="primary" outlined width="100px"
        >Login</v-btn
      >
      <v-btn small class="mx-2" color="primary" width="100px">Signup</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    links: ['Docuemnt', 'Pricing', 'Support']
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>
