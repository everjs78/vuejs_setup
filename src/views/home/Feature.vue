<template>
  <v-card class="mx-auto" flat>
    <v-card-title class="feature f-title">{{ inData.title }}</v-card-title>
    <v-card-text class="feature f-desc">{{ inData.desc }} </v-card-text>
    <v-card-actions>
      <v-btn class="feature f-btn" outlined color="indigo">Learn more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    inData: Object,
  },
};
</script>
<style lang="scss">
@import '@/components/styles/variables.scss';

.feature {
  &.f-title {
    font-size: 30px;
  }
  &.f-desc {
    font-size: 16px;
  }
  &.f-btn {
    width: 100px;
    font-size: 10px;
  }
}
</style>
