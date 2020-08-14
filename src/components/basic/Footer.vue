<template>
  <v-footer id="footer" class="d-block py-6">
    <v-container class="text-center">
      <v-row>
        <v-col cols="1">
          <Logo />
        </v-col>
        <v-col cols="8">
          <LinkBox />
        </v-col>
        <v-col cols="3">
          Follow us
          <a
            v-for="(social, i) in socials"
            :key="i"
            :href="social.href"
            :title="social.title"
            :aria-label="social.title"
            class="ma-4 d-inline-block"
            target="_blank"
            rel="noopener"
          >
            <span class="mdi" :class="social.icon" />
            <!--<v-icon dark v-text="social.icon" />-->
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import Logo from './Logo.vue';
import LinkBox from './LinkBox.vue';

export default {
  name: 'Footer',
  components: {
    Logo,
    LinkBox,
  },
  props: {
    source: String,
  },
  data: () => ({
    email: '',
    socials: [
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/',
        title: 'Facebook',
      },
      {
        icon: 'mdi-facebook',
        href: 'https://medium.com/vuetify',
        title: 'Medium',
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/vuetifyjs',
        title: 'Twitter',
      },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
