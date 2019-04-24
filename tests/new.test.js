/* global test, expect */

import newObject from '../src/new/new.js'

test('contructor function without return', () => {
  function Car (make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  const car1 = new Car('toyta', 'AE86', 1987)
  const car2 = newObject(Car, 'toyta', 'AE86', 1987)

  Car.prototype.wheels = 4
  
  expect(car1.wheels).toBe(4)
  expect(car2.wheels).toBe(4)
  expect(car1.make).toBe(car2.make)
  expect(car1.__proto__).toBe(car2.__proto__)
  expect(car1 instanceof Car).toBe(true)
  expect(car2 instanceof Car).toBe(true)
  expect(Object.getPrototypeOf(car1)).toBe(Object.getPrototypeOf(car2))
})
