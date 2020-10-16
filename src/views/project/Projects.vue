<template>
  <div>
    <v-container class="fill-height projects" fluid>
      <v-row align="start" justify="center">
        <v-col cols="8">
          <v-row align="center" justify="center" v-for="item in projects" :key="item.name">
            <v-col class="project-card" cols="12">
              <ProjectCard :item="item" @click="goProject(item.name)" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <Summary class="summary" :info="summary" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectCard from './ProjectCard.vue';
import Summary from './Summary.vue';

export default Vue.extend({
  name: 'Projects',
  components: {
    ProjectCard,
    Summary,
  },
  created() {
    this.$vuetify.theme.dark = false;
    this.getProjects();
  },
  data() {
    return {
      projects: [],
      summary: {
        apps: [
          { count: 5, name: 'Applications' },
          { count: 1, name: 'Databases' },
          { count: 1, name: 'Aergo Timestamping' },
        ],
        bill: '5',
      },
    };
  },
  methods: {
    async getProjects() {
      const data = await this.$rest.get('/ui/v1/projects');
      if (data) {
        console.log('projects:', data);
        this.projects = data.items.map((project: any) => ({
          name: project.name,
          desc: project.description,
        }));
      }
    },
    goProject(name: string) {
      console.log('go project detail');
      this.$router.push({ name: 'project-detail', params: { name } });
    },
  },
});
</script>

<style lang="scss">
.projects {
  max-width: 1200px;
}
.project-card {
  max-width: 800px;
}
.summary {
  margin: 12px;
}
</style>
