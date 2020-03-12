import axios from 'axios'
import ApiHelper from '@/services/apiHelper'
import createPersistedState from 'vuex-persistedstate'

export default {
  state: {
    userName: '',
    token: '',
    status: null
  },
  plugins: [createPersistedState()],
  mutations: {
    loadingMutation (state) {
      state.status = 'loading'
    },
    loginSuccessMutation (state, payload) {
      state.userName = payload.user.name
      state.status = 'success'
      state.token = payload.token
    },
    loginFailureMutation (state) {
      state.userName = ''
      state.status = 'failure'
      state.token = ''
    }
  },
  actions: {
    loginAction ({ commit, dispatch }, userDetails) {
      commit('loadingMutation')
      return new Promise((resolve, reject) => {
        ApiHelper.login(userDetails)
          .then(response => {
            const token = response.token
            const user = response.user
            commit('loginSuccessMutation', { token: token, user: user })
            localStorage.setItem('token', token)
            axios.defaults.headers.common['AUTHORIZATION'] = token
            dispatch('fetchAllChallenges')
            resolve(response)
          })
          .catch(error => {
            commit('LoginFailureMutation')
            localStorage.removeItem('token')
            reject(error)
          })
      })
    }
  },
  getters: {
    isLoggedIn: state => state.status === 'success',
    userName: state => state.userName,
    token: state => state.token
  }
}
