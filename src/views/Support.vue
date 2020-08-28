<template>
  <section id="document" class="white">
    <div>
      support
    </div>
  </section>
</template>

<script>
export default {
  name: 'Support',
  components: {},
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>

<style lang="scss">
@import '@/components/styles/variables.scss';
.mono {
  font-family: 'Roboto Mono', monospace !important;
}
</style>
