class PubSubHandler {
  constructor(){
    this.eventPool = new Map()
  }

  off (name){
    this.eventPool.delete(name)
  }

  trigger (name, ...args){
    this.eventPool.get(name) &&
    this.eventPool.get(name).forEach(callback => callback(...args));
  }

  on (name, callback){
    let topic = this.eventPool.get(name)
    if(!topic){
      this.eventPool.set(name) = []
    }
    this.eventPool[name].push(callback)
  }
}