import ApiHelper from '@/services/apiHelper'

export default {
  state: {
    challenges: []
  },
  mutations: {
    fetchAllChallengesMutation (state, challenges) {
      state.challenges = challenges
    },
    failureChallengesMutation (state) {
      state.challenges = []
    }
  },
  actions: {
    fetchAllChallenges ({ commit }) {
      return new Promise((resolve, reject) => {
        ApiHelper.challenges()
          .then(response => {
            console.log('________________________________')
            const challenges = response.challenges
            commit('fetchAllChallengesMutation', { challenges })
            resolve(response)
          })
          .catch(error => {
            commit('failureChallengesMutation')
            reject(error)
          })
      })
    }
  },
  getters: {
    allChallenges: state => state.challenges
  }
}
