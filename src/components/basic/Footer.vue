<template>
  <div>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>
