'use strict'

describe('utils', () => {
  const convertToDollars = require('../convertToDollars')

  describe('convertToDollars', () => {
    it('can convert a string of dollars to a number of dollars', () => {
      expect(convertToDollars('$1,000')).toBe(1000)
    })
  })
})
