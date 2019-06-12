String.prototype.repeatify = function (num) {
  let retStr = this
  let i = num - 1
  while (i--) {
    retStr += retStr
  }

  return retStr
}

String.prototype.isAnagram = function (targetStr) {
  return Array.from(this).sort().join('') === Array.from(targetStr).sort().join('')
}

String.prototype.buffer = function () {

}
