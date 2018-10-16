const state = {
  currentlyOpenLedger: null
}

const mutations = {
  OPEN_LEDGER (state) {
    state.currentlyOpenLedger = true
  },

  CLOSE_LEDGER (state) {
    state.currentlyOpenLedger = null
  }
}

const actions = {
  openLedger ({ commit }) {
    commit('OPEN_LEDGER')
  },

  closeLedger ({ commit }) {
    commit('CLOSE_LEDGER')
  }
}

export default {
  state,
  mutations,
  actions
}
