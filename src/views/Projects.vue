<template>
  <div>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <span>Project main</span>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  created() {
    this.$vuetify.theme.dark = false;
  },
});
</script>
