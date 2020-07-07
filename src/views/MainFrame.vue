<template>
  <div>
    <Header></Header>
    <router-view class="router-view" />
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
    Footer
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>
