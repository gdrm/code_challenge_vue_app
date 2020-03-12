import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_RAILS_API_URL

export default {
  async login (userDetails) {
    const response = await axios.post('login', userDetails, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Type': 'application/json; charset=utf-8'
      }
    })
    return response.data
  },
  async challenges () {
    const response = await axios.get('challenges', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Type': 'application/json; charset=utf-8'
      }
    })
    return response.data
  },
  async challenge (id) {
    const response = await axios.get(`challenges/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Type': 'application/json; charset=utf-8'
      }
    })
    return response.data
  },
  async createSolution (id, requestBody) {
    const response = await axios.post(`challenges/${id}/solutions`, requestBody)
    return response.data
  },
  async solution (id) {
    const response = await axios.get(`challenges/${id}/solution`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Type': 'application/json; charset=utf-8'
      }
    })
    return response.data
  }
}
