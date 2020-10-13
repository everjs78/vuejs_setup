<template>
  <v-app>
    <div class="fill-viewport">
      <router-view class="router-view" />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('App created');
  },
};
</script>

<style lang="scss">
.fill-viewport {
  min-height: 100vh;
}
</style>
