function decorator(sourceObj,decortorFn){
  decortorFn(sourceObj)
  return sourceObj
}
var d = {a:1}
d = decorator(d,(d) => {d.b=1})
