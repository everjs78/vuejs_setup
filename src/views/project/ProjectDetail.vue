<template>
  <div>
    <v-container class="project-detail" fluid>
      <v-card flat>
        <v-row align="center" justify="space-between">
          <v-col>
            <v-icon size="21px" color="green" class="status">mdi-checkbox-blank-circle</v-icon>
            <span class="project-name"> {{ $route.params.name }} </span>
          </v-col>
          <v-col class="command-box">
            <v-btn icon>
              <v-icon>mdi-square-edit-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          ><v-col>
            <v-tabs v-model="tab" background-color="transparent" grow>
              <v-tab>
                Apps
              </v-tab>
              <v-tab>
                Activity
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card flat>
                  <Apps :projectName="projectName" />
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  activity
                  <!---<Activity :projectName="projectName" /> -->
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col></v-row
        >
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Apps from './Apps.vue';

export default Vue.extend({
  name: 'ProjectDetail',
  components: {
    Apps,
  },
  data() {
    return {
      tab: null,
      items: ['Apps', 'Activity'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
  created() {
    this.$vuetify.theme.dark = false;
  },
  props: {
    item: Object,
  },
  computed: {
    projectName(): string {
      return this.$route.params.name;
    },
  },
});
</script>

<style lang="scss">
.project-detail {
  max-width: 700px;
  .status {
    padding-bottom: 7px;
  }
  .project-name {
    font-size: 28px;
  }
}
.command-box {
  max-width: 100px;
}
</style>
