<template>
  <v-container fluid class="home-features py-4">
    <v-responsive :max-width="1280" class="mx-auto pa-6" min-height="30vh">
      <v-container class="pa-0">
        <v-row align="center">
          <h1 class="home-features features-title">Features</h1>
        </v-row>
        <v-row align="center">
          <v-col cols="6">
            <Feature :inData="features[0]" />
          </v-col>
          <v-col cols="6">
            <Feature :inData="features[1]" />
          </v-col>
          <v-col cols="6">
            <Feature :inData="features[2]" />
          </v-col>
          <v-col cols="6">
            <Feature :inData="features[3]" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
import Feature from './Feature.vue';

export default {
  name: 'HomeFeature',
  components: {
    Feature,
  },

  computed: {
    features() {
      return [
        {
          title: 'feature1',
          desc: 'feature1 description blahblahblahblahblahblahblahblahblahblahblahblahblahblah',
        },
        {
          title: 'feature2',
          desc: 'feature2 description blahblahblahblahblahblahblahblahblahblahblahblahblahblah',
        },
        {
          title: 'feature3',
          desc: 'feature3 description blahblahblahblahblahblahblahblahblahblahblahblahblahblah',
        },
        {
          title: 'feature4',
          desc: 'feature4 description blahblahblahblahblahblahblahblahblahblahblahblahblahblah',
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.home-features {
  background: white;

  .features-title {
    line-height: 1.5;
    font-size: 3rem;
    text-align: center;
  }
}
</style>
