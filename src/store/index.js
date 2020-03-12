import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import challenges from '@/store/modules/challenges'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  plugins: [createPersistedState()],
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    challenges
  }
})
