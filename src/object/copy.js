function deepCopy (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function deepCopy (obj) {
  let retObj = {}
  for (let key in obj) {
    retObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
  }

  return retObj
}
