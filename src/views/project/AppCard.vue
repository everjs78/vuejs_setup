<template>
  <v-card v-on="$listeners" class="app-card">
    <v-row justify="space-between" align="center" no-gutters>
      <v-col class="col-name" cols="3">
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
        <CommandMenu editable deletable />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import CommandMenu from '@/components/basic/CommandMenu.vue';

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
  },
  computed: {
    runningStatus(): string {
      return `${this.app.running_replicas} of ${this.app.replicas} instances`;
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
