const { isObject, isFunction } = require('./lib/util')
const serialize = require('./lib/serializer')

module.exports = err => {
  // JSON.stringify not working with Error due to Object.getOwnPropertyNames enumerable: false
  // https://stackoverflow.com/questions/18391212
  if (isFunction(err)) { return err.toString() }

  if (isObject(err)) { return serialize(err) }

  return err
}
