<template>
  <v-container fluid class="home-intro white--text py-4">
    <v-responsive :max-width="1280" class="mx-auto pa-6" min-height="30vh">
      <v-container class="pa-0">
        <v-row align="center">
          <v-col cols="12">
            <v-responsive class="overflow-visible">
              <h1 class="home-intro intro-title">Hub home page</h1>
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: 'HomeIntro',
};
</script>

<style lang="scss">
.home-intro {
  background: #1867c0;

  .intro-title {
    line-height: 1.5;
    font-size: 3rem;
    text-align: center;
  }
}
</style>
