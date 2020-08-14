<template>
  <v-container fluid class="home-features py-4">
    <v-responsive :max-width="1280" class="mx-auto pa-6" min-height="20vh">
      <v-container class="pa-0">
        <v-row>
          <v-col v-for="link in links" :key="link.title">
            <Link :title="link.title" :links="link.links" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
import Link from './Link.vue';

export default {
  name: 'LinkBox',
  components: {
    Link,
  },

  computed: {
    links() {
      return [
        {
          title: 'Family Sites',
          links: [
            {
              label: 'BLOCKO',
              url: 'http://blocko.io',
            },
            {
              label: 'AERGO',
              url: 'http://aergo.io',
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            {
              label: 'Document',
              to: 'document',
            },
            {
              label: 'Pricing',
              to: 'pricing',
            },
            {
              label: 'Support',
              to: 'support',
            },
          ],
        },
        {
          title: 'Legal',
          links: [
            {
              label: 'BLOCKO',
              url: 'http://blocko.io',
            },
            {
              label: 'AERGO',
              url: 'http://aergo.io',
            },
          ],
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.home-features {
  background: white;

  .features-title {
    line-height: 1.5;
    font-size: 3rem;
    text-align: center;
  }
}
</style>
