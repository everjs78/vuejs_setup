<template>
  <v-hover v-slot:default="{ hover }">
    <v-card v-on="$listeners" class="app-card" :elevation="hover ? 16 : 0" @click.prevent="goApp">
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="col-name" cols="9">
          <v-row>
            <v-col>
              <v-icon size="3" class="status" color="green">mdi-checkbox-blank-circle</v-icon>
              <span class="name">{{ app.name }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="desc">{{ app.name }} </span>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-command" cols="3">
          <span class="running"> {{ runningStatus }} </span>
          <CommandMenu deletable :target="app.name" :onDelete="deleteApp" />
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from 'vue';
import CommandMenu from '@/components/basic/CommandMenu.vue';
import Confirm, { VueConfirm } from '@/components/basic/Confirm.vue';

export default Vue.extend({
  name: 'AppCard',
  components: {
    CommandMenu,
  },
  created() {
    this.$vuetify.theme.dark = false;
  },
  props: {
    app: Object,
    projectName: String,
  },
  computed: {
    runningStatus(): string {
      return `${this.app.running_replicas} of ${this.app.replicas} instances`;
    },
  },
  methods: {
    goApp() {
      console.log('go app', this.app.name);
      this.$router.push({ name: 'app-detail', params: { projname: this.projectName, appname: this.app.name } });
    },
    deleteApp() {
      console.log(`delete app ${this.app.name}`);

      (this.$root as VueConfirm)
        .$confirm(
          'Delete App',
          'If you erase it, it cannot be reversed. I hope you are careful. Enter application name to delete',
          {
            label: 'app name',
            checkFn: (name: string) => name == this.app.name,
          },
        )
        .then((confirm: boolean) => {
          console.log('onBeforeDeleteItem confirm : ' + confirm);
          if (confirm) {
            console.log(`delete application /ui/v1/projects/${this.projectName}/apps/${this.app.name}`);

            /*
            this.$rest
              .delete(`/ui/v1/projects/${this.projectName}/apps/${this.app.name}`)
              .then(() => {
                console.log(`delete app ${this.app.name}`);
              })
              .catch((error: any) => {
                console.log(`error to delete app ${this.app.name}`);
              });
              */
          }
        });
    },
  },
});
</script>

<style lang="scss">
.app-card {
  .col-name {
    width: 50px;
  }

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
