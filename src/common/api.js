import axios from 'axios'

const API_PATH = process.env.MOB4H_HOST || ' https://backoffice.mob4h.pt/server/index.php/api'

const CancelToken = axios.CancelToken
let cancel

const getAuthToken = () => {
  const authElem = document.getElementById('auth_token')
  return (authElem && authElem.getAttribute('token')) || process.env.MOB4H_AUTH_TOKEN
}

const getApiUrl = path => {
  return `${API_PATH}/${path}`
}

const buildRequestHeaders = (contentType = 'json') => {
  const headers = {}
  switch (contentType) {
    case 'json':
      headers['Content-Type'] = 'application/json'
      break
    case 'form':
      headers['Content-Type'] = 'multipart/form-data'
      break
  }
  const token = getAuthToken()
  if (token) {
    headers.Authorization = token
  }
  return headers
}

const doRequest = (url, data, headers, opts) => {
  return axios({
    cancelToken: new CancelToken(function executor (c) { cancel = c }),
    headers: headers || buildRequestHeaders(),
    method: 'post',
    url: getApiUrl(url),
    data: data,
    ...opts
  })
}

const cancelLastRequest = () => {
  cancel('request_cancelled')
}

const fetchList = async function (method, data) {
  const request = await doRequest(method, data)
  if (!request.data) {
    return []
  }
  return request.data.value
}

const IMAGES_MAPPING = {
  thumbnail: 'logotiposmall',
  desktop: 'logotipolarge',
  mobile: 'logotipo'
}

const getImagesUrl = function (operator, size, format) {
  const imageOpts = format ? IMAGES_MAPPING[format] : IMAGES_MAPPING.thumbnail
  const sizeOpts = size ? `&size=${size}` : ''
  const method = `operadores/${imageOpts}?operadoresid=${operator}${sizeOpts}`
  return getApiUrl(method)
}

const fetchDistricts = async function () {
  return fetchList('distritos')
}

const fetchTransportKinds = async function () {
  return await fetchList('tipos-transportes')
}

const fetchVehicleKinds = async function () {
  return await fetchList('tipos-viaturas')
}

const fetchOperators = async function (data) {
  const formData = new FormData()
  data && Object.keys(data).map(key => formData.append(key, JSON.stringify(data[key])))
  return await fetchList('operadores/list', data ? formData : undefined)
}

const insertOperator = async function (data) {
  const formData = new FormData()
  Object.keys(data).map(key => formData.append(key, data[key]))
  return await doRequest('operadores/insert', formData, buildRequestHeaders('form'))
}

const requestImage = function (url, cb) {
  const request = new XMLHttpRequest()
  request.responseType = 'blob'
  request.open('get', url, true)
  request.setRequestHeader('Authorization', getAuthToken())
  request.onreadystatechange = e => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      try {
        cb(request)
      } catch (e) {}
    }
  }
  request.send(null)
}

const sendAnalytics = async function (section) {
  !process.env.IN_DEV && await doRequest(`analitics?id=${section}`)
  return section
}

export {
  getAuthToken,
  cancelLastRequest,
  fetchList,
  fetchDistricts,
  fetchTransportKinds,
  fetchVehicleKinds,
  fetchOperators,
  insertOperator,
  requestImage,
  getImagesUrl,
  sendAnalytics
}
