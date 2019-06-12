'use strict'

function sleep (fn, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(fn())
    }, delay)
  })
}

function debounce (fn, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    const ctx = this;
    const args = arguments
    timer = setTimeout(function () {
      fn.apply(ctx, args)
    }, delay)
  }
}

function throttle (action, delay){
  var last = 0
  return function () {
    var curr = Date.now()
    if (curr - last > delay) {
      action.apply(this, arguments)
      last = curr 
    }
  }
}
