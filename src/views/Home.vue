<template>
  <div>
    <v-main>
      <v-responsive min-height="100vh">
        <section id="home" class="white">
          <HomeIntro />
          <HomeFeature />
        </section>
      </v-responsive>
    </v-main>
  </div>
</template>

<script>
import HomeIntro from './home/HomeIntro.vue';
import HomeFeature from './home/HomeFeature.vue';

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeFeature,
  },
  data: () => ({
    //myImage: require('@/assets/logo.svg'),
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>

<style lang="scss">
@import '@/components/styles/variables.scss';
.mono {
  font-family: 'Roboto Mono', monospace !important;
}
</style>
