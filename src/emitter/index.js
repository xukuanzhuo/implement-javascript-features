class Emitter {
  constructor () {
    this.eventpool = {}
  }

  on (name, callback) {
    if (!this.eventpool[name]) {
      this.eventpool[name] = []
    }
    this.eventpool[name].push(callback)
  }

  off (name) {
    if (this.eventpool[name]) {
      delete this.eventpool[name]
    }
  }

  emit (name, ...args) {
    if (!this.eventpool[name]) return
    const len = this.eventpool[name].length
    for (let i = 0; i < len; i++) {
      this.eventpool[name][i](...args)
    }
  }
}
