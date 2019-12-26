const state = {
  token: '',
  user: {}
}

const getters = {
  getToken(state) {
    return state.token
  },
  getUser(state) {
    return state.user
  }
}

const mutations = {
  SET_TOKEN(state, data) {
    state.token = data
  },
  SET_USER(state, data) {
    state.user = data
  }
}

export default {
  state,
  getters,
  mutations
}
