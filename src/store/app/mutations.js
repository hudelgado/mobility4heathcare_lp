
export function storeOperators (state, payload) {
  state.operators = payload
}

export function storeTransports (state, payload) {
  state.transports = payload
}

export function storeVehicles (state, payload) {
  state.vehicles = payload
}

export function storeDistricts (state, payload) {
  state.districts = payload
}

export function incFailedTokenAttempts (state) {
  state.failedTokenAttempts += 1
}

export function saveSentAnalytics (state, payload) {
  state.sentAnalytics.push(payload)
}
