<template>
  <v-app>
    <div class="fill-viewport">
      <router-view class="router-view" />
    </div>
    <Confirm ref="confirm" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Confirm from '@/components/basic/Confirm.vue';

type VConfirm = Vue & {
  open: (title: string, message: string, options: any) => Promise<boolean>;
};

type XVue = Vue & {
  $confirm: any;
};

export default Vue.extend({
  name: 'App',
  components: {
    Confirm,
  },
  created() {
    console.log('App created');
  },
  mounted() {
    const confirm = this.$refs.confirm as VConfirm;
    (this.$root as XVue).$confirm = confirm.open;
  },
});
</script>

<style lang="scss">
.fill-viewport {
  min-height: 100vh;
}
</style>
