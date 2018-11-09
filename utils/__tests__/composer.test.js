'use strict'

describe('utils', () => {
  const composer = require('../composer')

  describe('composer', () => {
    it('can successfully compose non-array data', () => {
      const result = composer(0)
        .map(num => num + 1)
        .resolve(num => num + 1)
      expect(result).toBe(2)
    })
  })
})
