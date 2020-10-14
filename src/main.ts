import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import Rest from './plugins/rest';
import API from './api';

Vue.config.productionTip = false;
Vue.use(Rest, {
  //baseUrl: 'https://localhost:8000/ui/v1',
  init: (axios: any) => {
    // init auth hedaer from localstorage when startup or refresh
    const accessToken = window.localStorage.getItem('token');
    if (accessToken) {
      console.log('init access token:' + accessToken);
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

Vue.use(API);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
