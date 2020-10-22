<template>
  <div>
    <v-row align="center" justify="center" v-for="section in appSections" :key="section.name" class="section pt-2 pb-4">
      <v-col v-if="section.apps !== undefined && section.apps.length > 0">
        <v-row class="title" cols="12">
          <v-col class="pb-0">{{ section.name }}</v-col>
        </v-row>
        <v-row v-for="app in section.apps" :key="app.name">
          <v-col class="app-card" cols="12">
            <AppCard :app="app" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCard from './AppCard.vue';

export default Vue.extend({
  name: 'Apps',
  components: {
    AppCard,
  },
  props: {
    projectName: String,
  },
  created() {
    this.$vuetify.theme.dark = false;
    this.getApps();
  },
  data() {
    return {
      appSections: [
        {
          name: 'Web',
          apps: [],
        },
        {
          name: 'Workers',
          apps: [],
        },
        {
          name: 'ManagedApps',
          apps: [],
        },
      ],
    };
  },
  methods: {
    async getApps() {
      const data = await this.$rest.get(`/ui/v1/projects/${this.projectName}`);
      if (data) {
        console.log('projectinfo:', data);
        this.appSections[0].apps = data.apps['webs'];
        this.appSections[1].apps = data.apps['workers'];
        this.appSections[2].apps = data.apps['manages-apps'];
      }
    },
    goApp(appName: string) {
      console.log('go app detail', appName);
      this.$router.push({ name: 'app-detail', params: { appName } });
    },
  },
});
</script>

<style lang="scss">
.apps {
  padding: 30 30 30 30;
}
.section {
  .title {
    font-size: 24px;
  }
}

.app-card {
  max-width: 800px;
}
.summary {
  margin: 12px;
}
</style>
