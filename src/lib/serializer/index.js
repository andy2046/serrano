const { isObject, isArray, isFunction, isString } = require('../util')

const serialize = (err, shown = []) => {
  const ret = isArray(err) ? [] : {}
  shown.push(err)

  for (const key of Object.keys(err)) {
    const v = err[key]

    if (isFunction(v)) {
      ret[key] = v.toString()
      continue
    }

    if (!v || !isObject(v)) {
      ret[key] = v
      continue
    }

    if (!~shown.indexOf(err[key])) {
      ret[key] = serialize(err[key], shown.slice(0))
      continue
    }

    ret[key] = '[Circular]'
  }

  if (isString(err.message)) {
    ret.message = err.message
  }

  if (isString(err.stack)) {
    ret.stack = err.stack.substring(err.stack.indexOf('\n') + 1)
      .split('\n').map(i => i.trim())
  }

  return ret
}

module.exports = serialize
