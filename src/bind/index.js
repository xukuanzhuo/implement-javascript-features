'use strict'

Function.prototype.bind2 = function (context) {
  const _this = this

  const args = Array.prototype.slice.call(arguments, 1)

  const fNOP = function () {}

  const returnFun = function () {
    const bindedArgs = Array.prototype.slice.call(arguments)
    const ctx = this instanceof fNOP ? this : context
    return _this.apply(ctx, args.concat(bindedArgs))
  }

  fNOP.prototype = this.prototype
  returnFun.prototype = new fNOP()
  return returnFun
}
