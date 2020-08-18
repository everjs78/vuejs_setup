<template>
  <div>
    <v-main>
      <v-responsive min-height="50vh">
        <section id="document" class="white">
          <div>
            document
          </div>
        </section>
      </v-responsive>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'Document',
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
