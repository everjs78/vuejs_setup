<template>
  <v-footer id="footer" class="d-block py-6" color="grey darken-4" dark>
    <v-container class="text-center">
      <v-row>
        <v-col cols="12">
          <span> Footer</span>
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
            <v-icon dark v-text="social.icon" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    source: String,
  },
  data: () => ({
    email: '',
    socials: [
      {
        icon: 'mdi-reddit',
        href: 'https://www.reddit.com/r/vuetifyjs',
        title: 'Reddit',
      },
      {
        icon: 'mdi-medium',
        href: 'https://medium.com/vuetify',
        title: 'Medium',
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/vuetifyjs/vuetify',
        title: 'Github',
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/vuetifyjs',
        title: 'Twitter',
      },
      {
        icon: 'mdi-discord',
        href: 'https://community.vuetifyjs.com',
        title: 'Discord Community',
      },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
