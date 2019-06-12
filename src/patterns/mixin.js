class StateTracker {
  constructor () {
    this.raw = {
      a:1,
      b:2
    }
  }
  mixin(obj){
    Object.assign(this, obj)
  }
}
