<template>
  <div>
    <v-container class="fill-height projects" fluid>
      <v-row align="start" justify="center">
        <v-col cols="8">
          <v-row align="center" justify="center" v-for="item in projects" :key="item.name">
            <v-col class="project-card" cols="12">
              <Project :item="item" />
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

<script>
import Vue from 'vue';
import Project from './Project.vue';
import Summary from './Summary.vue';

export default Vue.extend({
  name: 'Projects',
  components: {
    Project,
    Summary,
  },
  created() {
    this.$vuetify.theme.dark = false;
  },
  data() {
    return {
      projects: [
        { name: 'project1', desc: 'desc for project1' },
        { name: 'project2', desc: 'desc for project2' },
        { name: 'project3', desc: 'desc for project3' },
      ],
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
  mounted() {
    console.log('mount projects');

    this.$rest
      .get('/ui/v1/projects')
      .then((data) => {
        console.log('projects:', data);
      })
      .catch((error) => {
        console.log('project error:', error);
        throw error;
      });
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
