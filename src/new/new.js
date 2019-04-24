'use strict'

function newObject () {
  const obj = new Object()
  const constructor = [].shift.apply(arguments)
  obj.__proto__ = constructor.prototype
  const ret = constructor.apply(obj, arguments)

  return typeof ret === 'Object' ? ret || obj : obj
}

export default newObject
