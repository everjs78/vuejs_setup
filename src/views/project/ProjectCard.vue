<template>
  <v-card v-on="$listeners">
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-text>{{ item.desc }}</v-card-text>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectCard',
  created() {
    this.$vuetify.theme.dark = false;
  },
  props: {
    item: Object,
  },
});
</script>
