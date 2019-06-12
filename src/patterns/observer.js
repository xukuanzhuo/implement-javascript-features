class Observer {
  constructor () {
    this.observers = []
    this.internalState = null
  }

  // registerObserver
  registerObserver (observerFun) {
    this.observers.push(observerFun)
  }

  // 内部状态变化, 触发观察者列表
  changed (val) {
    this.internalState= val
    this.observers.forEach(observer => observer(val))
  }
}
