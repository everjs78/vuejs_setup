<template>
  <v-hover v-slot:default="{ hover }">
    <v-card v-on="$listeners" :elevation="hover ? 16 : 2" class="projectcard">
      <v-row>
        <v-col>
          <v-icon size="3" class="status" color="green">mdi-checkbox-blank-circle</v-icon>
          <span class="name">{{ item.name }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="desc">{{ item.name }} </span>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectCard',
  created() {
    this.$vuetify.theme.dark = false;
  },
  props: {
    item: Object,
  },
});
</script>

<style lang="scss">
.project-card {
  .status {
    padding-left: 10px;
    padding-right: 10px;
  }
  .name {
    font-size: 20px;
  }
  .desc {
    font-size: 13px;
    padding-left: 30px;
  }
}
</style>
