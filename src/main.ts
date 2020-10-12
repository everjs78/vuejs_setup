import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './i18n';

import Rest from './plugins/rest';

Vue.config.productionTip = false;
Vue.use(Rest, {
  //baseUrl: 'https://localhost:8000/ui/v1',
  init: (axios: any) => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }

    axios.interceptors.response.use(
      (response: any) => {
        if (response.data.message) {
          /*
          Toasts.EventBus.$emit('add', {
            type: 'success',
            text: response.data.message,
            autoClose: toastDefaultAutoClose,
          });
          */
        }
        return response;
      },
      (error: any) => {
        if (!error.response) {
          router.push('/error/disconnected');
        } else {
          /*
          Toasts.EventBus.$emit('add', {
            type: 'danger',
            text: error.response.data.message,
            autoClose: toastDefaultAutoClose,
          });
          */
        }
        return Promise.reject(error);
      },
    );
  },
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
