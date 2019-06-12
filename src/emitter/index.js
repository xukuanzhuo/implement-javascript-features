function Emitter () {
  this.eventPool = {}
}

Emitter.prototype.on = function (name, fn) {
  if (!this.eventPool[name]) {
    this.eventPool[name] = []
  }

  this.eventPool.push(fn)
}

Emitter.prototype.emit = function (name, ...args) {
  if (this.eventPool[name]) {
    this.eventPool[name].forEach(event => event.apply(...args))
  }
}

Emitter.prototype.off = function (name) {
  delete this.eventPool[name]
}