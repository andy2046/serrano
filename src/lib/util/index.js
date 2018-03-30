function isObject (x) {
  return x != null && typeof x === 'object'
}

function isArray (x) {
  return (Array.isArray && Array.isArray(x)) || (toString.call(x) === '[object Array]')
}

function isFunction (x) {
  return typeof x === 'function'
}

function isString (x) {
  return typeof x === 'string'
}

module.exports = {
  isArray,
  isObject,
  isFunction,
  isString
}
