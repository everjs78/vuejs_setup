import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem('token') || '',
    status: '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    authRequest: (state) => {
      state.status = 'loading';
    },
    authSuccess: (state, token) => {
      state.status = 'success';
      state.token = token;
    },
    authError: (state) => {
      state.status = 'error';
    },
    authLogout: (state) => {
      state.token = '';
      state.status = 'logout';
    },
  },
  actions: {
    authRequest: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        // The Promise used for router redirect in login
        commit('authRequest');
        // @ts-ignore
        payload.rest
          .get('/ui/v1/login', undefined, { auth: payload.auth })
          .then((data: any) => {
            window.localStorage.setItem('token', data.access_token);
            // @ts-ignore
            payload.rest.setDefaultAccessToken(data.access_token);

            commit('authSuccess', data.access_token);

            resolve(data);
          })
          .catch((error: any) => {
            commit('authError', error);
            window.localStorage.removeItem('token');
            reject(error);
          });
      });
    },
    authLogout: ({ commit, dispatch }, payload) => {
      return new Promise((resolve, reject) => {
        payload.rest
          .delete('/ui/v1/logout')
          .then((data: any) => {
            commit('authLogout');
            window.localStorage.removeItem('token'); // clear your user's token from localstorage
            payload.rest.setDefaultAccessToken();
            resolve();
          })
          .catch((error: any) => {
            commit('authError', error);
            reject(error);
          });
      });
    },
  },
  modules: {},
});
