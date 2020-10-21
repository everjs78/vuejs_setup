<template>
  <v-form>
    <v-dialog
      v-model="dialog"
      max-width="600px"
      max-height="355px"
      :style="{ zIndex: options.zIndex }"
      @keydown.esc="cancel"
      class="confirm-dialog"
    >
      <v-card height="355px">
        <v-card-title color="white" class="c-title" dense flat>
          {{ title }}
        </v-card-title>
        <v-card-text v-show="!!message">
          <v-row class="message pt-6" align="center">
            <v-col cols="1">
              <v-icon color="red" size="40px" class="alert-icon"> mdi-alert-circle-outline </v-icon>
            </v-col>
            <v-col cols="10">
              {{ message }}
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <span class="label-name">{{ $t('label.name') }}</span>
              <v-text-field height="36px" v-model="name" solo clearable></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider class="login-divider" />

        <div class="actions">
          <v-card-actions class="pt-4">
            <v-spacer></v-spacer>
            <v-btn outlined text @click.native="cancel">Close</v-btn>
            <v-btn color="red" outlined text @click.native="agree">Delete</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script lang="ts">
import Vue from 'vue';

export type VConfirmOpen = Vue & {
  open: (title: string, message: string, options: any) => Promise<boolean>;
};

export type VueConfirm = Vue & {
  $confirm: any;
};

export default Vue.extend({
  name: 'Confirm',
  data: () => ({
    name: '',
    dialog: false,
    resolve: (result: boolean) => {},
    reject: (result: boolean) => {},
    message: '',
    title: '',
    options: {
      color: 'primary',
      width: 290,
      zIndex: 200,
    },
  }),
  methods: {
    open(title: string, message: string, options?: any) {
      this.dialog = true;
      this.title = title;
      this.message = message;
      if (options !== undefined) {
        this.options = Object.assign(this.options, options);
      }
      return new Promise((resolve: any, reject: any) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    },
  },
});
</script>

<style lang="scss">
.confirm-dialog {
  /*
  .title {
    height: 33px;

    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    text-transform: none;
  }*/
  .message {
    height: 82px;
  }
  .alert-icon {
    height: 40px;
  }
  .actions {
    padding-top: 0px;
  }
}
</style>
<style lang="scss" scoped>
.v-dialog > .v-card > .v-card__title {
  font-size: 33px;
  font-weight: 500;
  letter-spacing: 0.0125em;
  padding: 24px 25px 10px 25px;
}
.theme--light.v-card > .v-card__text,
.theme--light.v-card .v-card__subtitle {
  color: red($color: #000000);
}
.v-card__subtitle,
.v-card__text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
}
.v-dialog > .v-card > .v-card__text {
  padding: 0 24px 0px;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 36px;
  padding: 0;
}
</style>

<i18n>
{
  "en": {
    "label" : {
      "name": "project name"
    }
  }
}
</i18n>
