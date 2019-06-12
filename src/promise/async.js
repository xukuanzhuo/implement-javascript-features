function runner (generatorFun) {
  const args = [].slice.call(arguments, 1)

  const it = generatorFun.apply(this, args)

  return Promise.resolve()
    .then(function handleNext (value) {
      const next = it.next(value)
      return (function handleResult (next){
        if (next.done) {
          return next.value
        } else {
          return Promise.resolve(next.value)
            .then(handleNext, function handleError (err) {
              return Promise.resolve(it.throw(err))
            })
        }
      })(next)
  })
}
