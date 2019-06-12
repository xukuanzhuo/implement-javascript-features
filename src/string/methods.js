String.prototype.repeatify = function (num) {
  let retStr = this
  let i = num - 1
  while (i--) {
    retStr += retStr
  }

  return retStr
}

String.prototype.isAnagram = function (str, targetStr) {
  Array.from(str).sort().join('')
}
