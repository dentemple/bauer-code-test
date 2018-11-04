'use strict'

describe('generate rules', () => {
  const preferences = require('../preferences')

  it('returns an expected data type', () => {
    expect(preferences).toBeTruthy()
    expect(typeof preferences).toBe('object')
  })
})
