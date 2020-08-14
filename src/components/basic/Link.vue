<template>
  <div>
    <v-row class="link-title">
      {{ title }}
    </v-row>
    <v-row v-for="link in links" :key="link.label">
      <v-col class="link-content">
        <a :href="link.url" :title="link.title" target="_blank" rel="noopener" class="link-href">
          <span class="link-label">{{ link.label }}</span>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Link',
  props: {
    title: String,
    links: Array,
  },
  data: () => ({}),
});
</script>

<style lang="scss">
.link-title {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding: 2px;
  padding-bottom: 10px;
}
.link-content {
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  padding: 2px;
}
.link-href {
  text-decoration: none;
  .link-label {
    color: black;
  }
}
</style>
