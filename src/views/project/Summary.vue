<template>
  <v-card>
    <v-card-title class="summary-title">Summary</v-card-title>
    <v-list>
      <v-list-item class="app-summary" v-for="app in info.apps" :key="app.name">
        <div class="app-count">{{ app.count }}</div>
        <div class="app-name">{{ app.name }}</div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Project',
  created() {
    this.$vuetify.theme.dark = false;
  },
  props: {
    info: Object,
  },
});
</script>

<style lang="scss">
.summary-title {
  padding-bottom: 0px;
}
.app-summary {
  min-height: 20px;
}
.app-count {
  width: 32px;
  font-size: 12px;
}
.app-name {
  max-width: 200px;
  font-size: 12px;
}
</style>
