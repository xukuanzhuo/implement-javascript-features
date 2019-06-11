// process.nextTick -> promise -> setImmediate -> setTimeout
// macro-task(宏任务): setImmediate, setTimeout, setInterval, I/O
// micro-task(微任务): process.nextTick, 原生Promise(有些实现的promise将then方法放到了宏任务中),Object.observe(已废弃), MutationObserver不兼容的
// MessageChannel

setImmediate(() => { console.log('setImmediate') })

Promise.resolve().then(() => {
  console.log('promise1')
}).then(() => {
  console.log('promise2')
  new Promise(() => {
    console.log('promise3')
  })
}).then(() => {
  console.log('promise4')
  setTimeout(() => {
    console.log('promise5')
  }, 0)
})

console.log('a')
setTimeout(() => { console.log('setTimeout') }, 0)

process.nextTick(() => { console.log('nextTick') })

console.log('end')