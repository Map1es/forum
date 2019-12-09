const state = {
  token: ''
}

const getters = {
  getToken(state) {
    return state.token
  }
}

const mutations = {
  SET_TOKEN(state, data) {
    state.token = data
  }
}

export default {
  state,
  getters,
  mutations
}
