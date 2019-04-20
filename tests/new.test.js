/* global test, expect */
import { objectFactory } from '../src/new/new.js'

test('adds 1 + 2 to equal 3', () => {
  function otaku (name) {
    this.name = name
  }

  const person = new otaku('kevin')
  const person2 = objectFactory(otaku, 'kevin')

  expect(person.name).toBe(person2.name)
})
