<template>
  <v-app>
    <div class="fill-viewport">
      <router-view class="router-view" />
    </div>
  </v-app>
</template>

<style lang="scss">
.fill-viewport {
  min-height: 100vh;
}
</style>
