'use strict'

describe('generate rules', () => {
  const generateRules = require('../generateRules')

  it('returns an expected data type', () => {
    expect(typeof generateRules).toBe('function')
    expect(generateRules()).toBeTruthy()
    expect(typeof generateRules()).toBe('object')
  })
})
