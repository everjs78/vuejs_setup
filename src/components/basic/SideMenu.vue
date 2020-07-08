<template>
  <v-navigation-drawer fixed app clipped permanent>
    <v-list-item-group>
      <v-list>
        <v-list-item
          v-for="item in menus"
          :to="item.routeAttrs.to"
          :key="item.title"
        >
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.label }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!--
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      -->
      </v-list>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { SidebarItemProps } from './SideMenuTypes';

export default Vue.extend({
  name: 'SideMenu',
  props: {},
  data() {
    return {
      menus: [
        {
          id: 1,
          label: this.$t('menus.projects') as string,
          routeAttrs: { to: { name: 'projects' } }
        },
        {
          id: 2,
          label: this.$t('menus.activity') as string,
          routeAttrs: { to: { name: 'activity' } }
        },
        {
          id: 3,
          label: this.$t('menus.billing') as string,
          routeAttrs: { to: { name: 'billing' } }
        },
        {
          id: 4,
          label: this.$t('menus.document') as string,
          routeAttrs: { to: { name: 'document' } }
        },
        {
          id: 5,
          label: this.$t('menus.support') as string,
          routeAttrs: { to: { name: 'support' } }
        },
        {
          id: 6,
          label: this.$t('menus.setting') as string,
          routeAttrs: { to: { name: 'setting' } }
        }
      ] as SidebarItemProps[]
    };
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
});
</script>

<i18n>
{
  "en": {
    "menus": {
        "projects" : "Projects",
        "activity" : "Activity",
        "billing" : "Billing",
        "document" : "Document",
        "support" : "Support",
        "setting" : "Setting"
    }
  }
}
</i18n>
