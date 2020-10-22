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
            <v-btn icon @click="openDelete">
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          ><v-col>
            <v-tabs v-model="tab" background-color="transparent" grow>
              <v-tab class="tabs">
                Apps
              </v-tab>
              <v-tab class="tabs">
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
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Apps from './Apps.vue';
import Confirm, { VueConfirm } from '@/components/basic/Confirm.vue';

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
  methods: {
    openDelete() {
      console.log('delete confirm');
      (this.$root as VueConfirm)
        .$confirm(
          'Delete Project',
          'If you erase it, it cannot be reversed. I hope you are careful. Enter project name to delete',
          {
            label: 'project name',
            checkFn: (name: string) => name == this.projectName,
          },
        )
        .then((confirm: boolean) => {
          console.log('onBeforeDeleteItem confirm : ' + confirm);
          if (confirm) {
            console.log(`delete project ${this.projectName}`);

            /*
            this.$rest
              .delete(`/ui/v1/projects/${this.projectName}`)
              .then(() => {
                console.log(`delete project ${this.projectName}`);
              })
              .catch((error: any) => {
                console.log(`error to delete project ${this.projectName}`);
              });
              */
          }
        });
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
  .tabs {
    font-size: 22px;
    font-weight: 500;
    text-transform: none;
  }
}
.command-box {
  max-width: 100px;
}
</style>
