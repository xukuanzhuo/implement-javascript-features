'use strict'

Function.prototype.bind2 = function (context) {
  const _this = this

  const args = Array.prototype.slice.call(arguments, 1)

  const fNOP = function () {}

  const returnFun = function () {
    const bindedArgs = Array.prototype.slice.call(arguments)
    const ctx = this instanceof fNOP && context ? this : context
    return _this.apply(ctx, args.concat(bindedArgs))
  }

  fNOP.prototype = this.prototype
  returnFun.prototype = new fNOP()
  return returnFun
}

Function.prototype.bind = function(oThis) {
  if (typeof this !== "function") {
    // 可能的与 ECMAScript 5 内部的 IsCallable 函数最接近的东西，
    throw new TypeError( "Function.prototype.bind - what " +
      "is trying to be bound is not callable"
    );
  }

  var aArgs = Array.prototype.slice.call( arguments, 1 ),
    fToBind = this,
    fNOP = function(){},
    fBound = function(){
      return fToBind.apply(
        (
          this instanceof fNOP &&
          oThis ? this : oThis
        ),
        aArgs.concat( Array.prototype.slice.call( arguments ) )
      );
    }
  ;

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
}