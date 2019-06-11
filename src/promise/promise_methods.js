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
  if (timer) {
    clearTimeout(timer)
    timer = null
  } else {
    timer = setTimeout(fn, delay)
  }
}

function throttle (fn, wait) {
  let timer = null
  let lastTime = null

  var currentTime = new Date()
  if (currentTime >= lastTime + wait) {
    fn()
    lastTime = currentTime
  } else {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(function () {
      fn()
    }, wait)
  }   
}
