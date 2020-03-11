export const state = () => ({
  error: null
})

export const mutations = {
  setError (state, error) {
    state.error = error
  }
}

export const actions = {
  showError ({ commit }, error) {
    commit('setError', error)
  },

  hideError ({ commit }) {
    commit('setError', null)
  }
}
