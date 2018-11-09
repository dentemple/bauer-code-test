'use strict'

describe('utils', () => {
  const formatCurrency = require('../formatCurrency')

  describe('formatCurrency', () => {
    it('can convert a number of dollars to a string of dollars', () => {
      expect(formatCurrency(1000)).toBe('$1,000')
    })
  })
})
