// https://github.com/xieranmaya/Promise3/blob/master/Promise3.js
// https://github.com/xieranmaya/blog/issues/3

function myPromise (executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function')
  }

  let _this = this

  _this.status = 'pending'
  _this.value = null
  _this.onResolvedCallback = []
  _this.onRejectedCallback = []

  function resolve (value) {
    if (_this.status === 'pending') {
      for(var i = 0; i < _this.onResolvedCallback.length; i++) {
        _this.onResolvedCallback[i](value)
      }
      _this.value = value
      _this.status = 'resolved'
    }
  }

  function reject (reason) {
    if (_this.status === 'pending') {
      for(var i = 0; i < _this.onResolvedCallback.length; i++) {
        _this.onRejectedCallback[i](value)
      }
      _this.value = reason
      _this.status = 'rejected'
    }
  }

  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

myPromise.prototype.then = function (onResolved, onRejectd) {
  var _this = this
  var promise = null

  onResolved = typeof onResolved === 'function' ? onResolved : function(value) { return value }
  onRejected = typeof onRejected === 'function' ? onRejected : function(reason) { return reason }

  if (self.status === 'resolved') {
    return promise = new Promise(function(resolve, reject) {

    })
  }

  if (self.status === 'rejected') {
    return promise = new Promise(function(resolve, reject) {

    })
  }

  if (self.status === 'pending') {
    return promise = new Promise(function(resolve, reject) {

    })
  }
}


myPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

myPromise.prototype.all = function (promises) {
  return new Promise(function (resolve, reject) {
    let len = promises.length
    let resolvedCount = 0
    let results = []
    for (let i =0; i < len; i++) {
      (Promise.resolve(promises[i]).then((res) => {
        results[i] = res
        resolvedCount++

        if (resolvedCount === len) {
          return resolve(results)
        }
      }, (reason) => {
        return reject(reason)   
      }))(i)
    }
  })
}

myPromise.prototype.race = function (promises) {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(function(value) {
        return resolve(value)
      }, function(reason) {
        return reject(reason)
      })
    }
  })
}
