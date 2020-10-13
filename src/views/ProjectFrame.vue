<template>
  <div>
    <Header loggined></Header>
    <SideMenu />
    <v-main>
      <v-responsive min-height="100vh">
        <router-view class="router-view" />
      </v-responsive>
    </v-main>
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
    console.log('project frame created');
  },
};
</script>
