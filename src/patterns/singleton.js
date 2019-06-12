var singleton = function () {
  var instance

  const createInstance = function () {
    this.a = 1
    this.b = 2
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
}

var test = singleton()
test.getInstance() == test.getInstance()