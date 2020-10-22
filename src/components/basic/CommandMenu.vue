<template>
  <v-menu open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <!--
      <v-list-item v-if="editable" @click="handleEdit()">
        <v-list-item-title>{{ $t('menus.edit') }}</v-list-item-title>
      </v-list-item>-->
      <v-list-item v-if="deletable" @click="handleDelete()">
        <v-list-item-title>{{ $t('menus.delete') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CommandMenu',
  components: {},
  props: {
    app: Object,
    editable: {
      type: Boolean,
      default: true,
    },
    deletable: {
      type: Boolean,
      default: true,
    },
    onDelete: Function,
  },
  methods: {
    handleEdit() {
      console.log('edit');
    },
    handleDelete() {
      console.log('call on delete');
      if (this.onDelete !== undefined && typeof this.onDelete === 'function') {
        this.onDelete();
      }
    },
  },
});
</script>

<style lang="scss"></style>

<i18n>
{
  "en": {
    "menus": {
        "edit" : "Edit",
        "delete" : "Delete"
    }
  }
}
</i18n>
