function instannceOf (instance, parent) {
  return instance.__proto__.constructor.name === parent.name
}

function typeOf (instance) {
  const types = {
    '[object Object]': 'object',
    '[object Function]': 'function',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Symbol]': 'symbol',
    '[object Boolean]': 'boolean',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null'
  }
  const type = Object.prototype.toString.call(instance)
  return types[type]
}


function createObj (obj) {
  function F(){}
  F.prototype = obj
  return new F()
}
