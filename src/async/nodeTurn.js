// 两个例子浏览器和node.js 执行顺序不一样！！！
// 浏览器Promise 会在连个setTimeout 中间

console.log(1);
console.log(2);
setTimeout(function(){
    console.log('setTimeout1')
    Promise.resolve().then(function(){
        console.log('Promise')
    })
},1000)
setTimeout(function(){
  console.log('setTimeout2')
  setTimeout(function () {
    console.log('setTimeout3')
  })
},1000)



console.log(1);
console.log(2);
setTimeout(function(){
    console.log('setTimeout1')
    Promise.resolve().then(function(){
        console.log('Promise1')
    })
},1000)
setTimeout(function(){
    console.log('setTimeout2')
    Promise.resolve().then(function(){
        console.log('Promise2')
    })
},1000)