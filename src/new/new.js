'use strict'

function newObject () {
  const obj = new Object()
  const constructor = [].shift.apply(arguments)
  obj.__proto__ = constructor.prototype
  const ret = constructor.apply(obj, arguments)

  return typeof ret === 'Object' ? ret || obj : obj
}

export default newObject


function new () {
  let obj = new Object()
  const constructor = [].slice.call(arguments)
  obj.__proto__ = constructor.prototype

  const ret = constructor.apply(obj, arguments)

  return typeof ret === 'object' ? ret || obj : obj
}