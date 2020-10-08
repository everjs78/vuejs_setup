<template>
  <div>
    <Header></Header>
    <v-main>
      <v-responsive min-height="70vh">
        <router-view class="router-view" />
      </v-responsive>
    </v-main>
    <Footer> </Footer>
  </div>
</template>

<script>
import Header from '@/components/basic/Header.vue';
import Footer from '@/components/basic/Footer.vue';

export default {
  name: 'MainFrame',
  components: {
    Header,
    Footer,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
