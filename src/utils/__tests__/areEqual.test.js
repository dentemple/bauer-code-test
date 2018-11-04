'use strict'

describe('utils', () => {
  const areEqual = require('../areEqual')

  describe('areEqual', () => {
    it('can determine if the contents of two arrays are not equal', () => {
      expect(areEqual(['a', 'b', 'c'], ['a', 'b', 'z'])).toEqual(false)
      expect(areEqual([1, 2, 3], [1, 2, 3, 4])).toEqual(false)
      expect(areEqual(['foo'], ['bar'])).toEqual(false)
    })

    it('can determine if the contents of two arrays are equal', () => {
      expect(areEqual(['a', 'b'], ['a', 'b'])).toEqual(true)
      expect(areEqual([1, 2, 3, 4], [1, 2, 3, 4])).toEqual(true)
      expect(areEqual(['foo', 'bar'], ['foo', 'bar'])).toEqual(true)
    })
  })
})
