import axios from 'axios'
import ApiHelper from '@/services/apiHelper'

export default {
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    status: localStorage.getItem('status') || null
  },
  mutations: {
    loadingMutation (state) {
      state.status = 'loading'
    },
    loginSuccessMutation (state, token, userObject) {
      state.status = 'Success'
      state.token = token
      state.user = userObject
    },
    loginFailureMutation (state) {
      state.status = 'Failure'
      state.token = ''
      state.user = {}
    }
  },
  actions: {
    loginAction ({ commit }, userDetails) {
      commit('loadingMutation')
      return new Promise((resolve, reject) => {
        ApiHelper.login(userDetails)
          .then(response => {
            const token = response.token
            const user = response.user
            commit('loginSuccessMutation', { token, user })
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('status', 'Success')
            axios.defaults.headers.common['Authorized'] = token
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
    isLoggedIn: state => state.status === 'Success',
    user: state => state.user,
    status: state => state.status,
    token: state => state.token
  }
}
