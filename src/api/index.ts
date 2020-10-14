import { PluginObject } from 'vue';
import auth, { AuthAPI } from './auth';

const API: PluginObject<null> = {
  install(Vue) {
    Vue.prototype.$api = {
      ...auth,
    };
    Vue.mixin({
      beforeCreate(): void {
        // @ts-ignore:@typescript-eslint/ban-ts-ignore
        for (const key of Object.keys(this.$api)) {
          // @ts-ignore:@typescript-eslint/ban-ts-ignore
          this.$api[key] = this.$api[key].bind(this);
        }
      },
    });
  },
};

declare module 'vue/types/vue' {
  interface Vue {
    $api: AuthAPI;
  }
}

export default API;
