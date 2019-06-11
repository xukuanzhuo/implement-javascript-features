import { sleep, run } from '../src/async/promise'

describe('when async', () => {
  test('should auto run with runner', () => {
    function *main () {
      try {
        var ret = yield step1();
      }
      catch (err) {
        ret = yield step1Failed( err );
      }
      ret = yield step2( ret );
    
      ret = yield Promise.all( [
        step3a( ret ),
        step3b( ret ),
        step3c( ret )
      ])
    
      yield step4( ret )
    }

    run(main)
  })
})