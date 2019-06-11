function confusedArr (arr) {
  return arr.sort((a, b) => Math.random() - 0.5)
}

function intersectArr (arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item))
}


Array.prototype.filter = function (cb, context) {
  context = context || this
  var len = this.length
  var retArr = []
  for(var i = 0; i < len; i++){
    if(cb.call(context, this[i], i, this)){
      retArr.push(this[i])
    }
  }
  return retArr
}

Array.prototype.flatten = function (step) {
  let retArr = []
  
  while (step--) {
    for (let item of this) {
      retArr = retArr.concat(item)
    }
  }

  return retArr
}
