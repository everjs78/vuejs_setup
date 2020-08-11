<template>
  <div>
    <Header loggined></Header>
    <SideMenu />
    <router-view class="router-view" />
    <Footer> </Footer>
  </div>
</template>

<script>
import Header from '@/components/basic/Header.vue';
import Footer from '@/components/basic/Footer.vue';
import SideMenu from '@/components/basic/SideMenu.vue';

export default {
  name: 'ProjectFrame',
  components: {
    Header,
    SideMenu,
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
