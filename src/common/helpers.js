const validateEmail = email => {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const filterObject = obj => {
  return Object.keys(obj)
    .filter(key => Boolean(obj[key]))
    .reduce((res, key) => {
      res[key] = obj[key]
      return res
    }, {})
}

export { validateEmail, filterObject }
