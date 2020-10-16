<template>
  <v-card v-on="$listeners" tile>
    <v-card-title>{{ app.name }}</v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppCard',
  created() {
    this.$vuetify.theme.dark = false;
  },
  props: {
    app: Object,
  },
});
</script>
