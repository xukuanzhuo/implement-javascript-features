import '../src/bind'

test('return binded function', () => {

  var a = {
    name: 'a',
    foo (firstName, name) {
      return name || firstName || this.name
    }
  }

  var b = {
    name: 'b',
    foo () {
      return this.name
    }
  }

  const bindedFoo = a.foo.bind2(b, 'james')

  expect(bindedFoo()).toBe('james')
  expect(bindedFoo('woke')).toBe('woke')
})