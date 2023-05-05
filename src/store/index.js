// import Vue from 'vue'
// import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

// Vue.use(Vuex)

// /* eslint-disable no-new */
// const store = new Vuex.Store({
//   plugins: [createPersistedState()],
//   modules: {
//   }
// })

// export default store

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        token : localStorage.getItem('auth') || ''
    },
    mutations : {
        setToken(state, token) {
            localStorage.setItem('auth', token);
            state.token = token;
        },
        clearToken(state) {
            localStorage.removeItem('auth');
            state.token = '';
        }
    }
})
