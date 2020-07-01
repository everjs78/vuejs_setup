<template>
  <div>
    <Header></Header>
    <Body> </Body>
    <Footer> </Footer>
  </div>
</template>

<script>
import Header from '@/components/basic/Header.vue';
import Footer from '@/components/basic/Footer.vue';
import Body from '@/components/basic/Body.vue';

export default {
  name: 'Main',
  components: {
    Header,
    Body,
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
