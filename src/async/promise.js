export function sleep (fn, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve(fn.call(this))
    }, delay)
  })
}


export function run (gen) {
	var args = [].slice.call(arguments, 1), it

	it = gen.apply(this, args)

	return Promise.resolve()
		.then( function handleNext(value){
			var next = it.next( value )

			return (function handleResult (next) {
				if (next.done) {
					return next.value
				}
				else {
					return Promise.resolve( next.value )
						.then(
							handleNext,
							function handleErr(err) {
                return Promise.resolve(it.throw(err))
                  .then(handleResult)
							}
						)
				}
			})(next)
		})
}

function runner (generator) {
  let args = [].slice.call(arguments, 1), it

  let it = generator.apply(this, args)
  return Promise.resolve()
    .then(function handleNext (value) {
      let next = it.next(value)

      return (function handleResult (next) {
        if (next.done) {
          return next.value
        } else {
          return Promise.resolve(next.value)
            .then(handleNext, function (err) {
              return Promise.resolve(it.throw(err))
                .then(handleResult)
            })
        }
      })(next)
    })
}