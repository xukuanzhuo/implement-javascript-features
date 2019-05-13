import '../src/bind'

test('should return binded function', () => {

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

  const nativeBind = a.foo.bind(b, 'james')
  const customizeBind = a.foo.bind2(b, 'james')

  expect(customizeBind()).toBe('james')
  expect(customizeBind('woke')).toBe('woke')
  expect(customizeBind('woke')).toBe(nativeBind('woke'))

  function foo (name, age) {
    this.type = 'bind'
    this.name = name
    this.age = age
  }

  const ntvBindFun = foo.bind(b, 'james')
  const ctzBindFun = foo.bind2(b, 'james')
  const ntvBindObj = new ntvBindFun(30)
  const ctzBindObj = new ctzBindFun(30)
  
  expect(ntvBindObj.name).toBe('james')
  expect(ntvBindObj.name).toBe(ctzBindObj.name)
  expect(ntvBindObj.age).toBe(ctzBindObj.age)
})