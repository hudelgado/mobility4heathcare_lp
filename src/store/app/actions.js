import { fetchOperators, fetchDistricts, fetchTransportKinds, fetchVehicleKinds, getAuthToken, sendAnalytics } from '../../common/api'

export async function fetchData ({ state, commit, dispatch }) {
  if (!getAuthToken() && state.failedTokenAttempts < 3) {
    commit('incFailedTokenAttempts')
    setTimeout(() => dispatch('fetchData'), 500)
    return
  }
  await Promise.all([
    dispatch('loadOperators'),
    dispatch('loadTransports'),
    dispatch('loadVehicles'),
    dispatch('loadDistricts')
  ])
}

export async function loadOperators ({ commit }, payload) {
  commit('storeOperators', await fetchOperators(payload))
}

export async function loadTransports ({ commit }) {
  commit('storeTransports', await fetchTransportKinds())
}

export async function loadVehicles ({ commit }) {
  commit('storeVehicles', await fetchVehicleKinds())
}

export async function loadDistricts ({ commit }) {
  commit('storeDistricts', await fetchDistricts())
}

export async function storeAnalyticsLanding ({ commit, state }) {
  const key = 1
  if (!state.sentAnalytics.find(a => a === key)) {
    commit('saveSentAnalytics', await sendAnalytics(key))
  }
}

export async function storeAnalyticsOperatorRegister ({ commit, state }) {
  const key = 2
  if (!state.sentAnalytics.find(a => a === key)) {
    commit('saveSentAnalytics', await sendAnalytics(key))
  }
}

export async function storeAnalyticsCampaigns ({ commit, state }) {
  const key = 3
  if (!state.sentAnalytics.find(a => a === key)) {
    commit('saveSentAnalytics', await sendAnalytics(key))
  }
}
