<template>
  <router-link
    :to="this.homeLink.to"
    :aria-label="this.homeLink.label"
    class="d-none d-sm-flex align-center text--primary home-link-href"
    :title="this.homeLink.title"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png"
      alt="Vuetify Logo"
      class="shrink mr-2"
      contain
      transition="scale-transition"
      width="40"
    />

    <v-sheet class="display-1 hidden-sm-and-down font-weight-medium mr-0 mr-md-4" color="transparent">
      {{ homeLink.title }}
    </v-sheet>
  </router-link>
</template>

<script>
export default {
  name: 'HubLogo',
  data: () => ({
    homeLink: {
      title: 'Hub',
      label: 'Hub home page',
      to: '/',
    },
  }),
};
</script>

<style lang="scss">
.home-link-href {
  text-decoration: none;
}
</style>
