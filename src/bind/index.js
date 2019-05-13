'use strict'

Function.prototype.bind2 = function (context) {
  const _this = this

  var args = Array.prototype.slice.call(arguments, 1)

  return function () {
    const bindedArgs = Array.prototype.slice.call(arguments)
    return _this.apply(context, args.concat(bindedArgs))
  }
}
