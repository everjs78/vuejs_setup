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
import Confirm, { VueConfirm, VConfirmOpen } from '@/components/basic/Confirm.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Confirm,
  },
  created() {
    console.log('App created');
  },
  mounted() {
    const confirm = this.$refs.confirm as VConfirmOpen;
    (this.$root as VueConfirm).$confirm = confirm.open;
  },
});
</script>

<style lang="scss">
.fill-viewport {
  min-height: 100vh;
}
</style>
