<template>
  <v-img class="mx-auto" contain height="32px" :src="logoImage" width="32px" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Logo',
  data: () => ({
    logoImage: require('@/assets/logo.svg'),
  }),
});
</script>

<style lang="scss"></style>
