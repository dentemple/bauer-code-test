'use strict'

describe('utils', () => {
  const getInches = require('../getInches')

  describe('getInches', () => {
    it('can convert a string of dimensions to a number', () => {
      expect(typeof getInches('31 x 25 in')).toEqual('number')
      expect(getInches('31 x 25 in')).toEqual(775)
      expect(getInches('10 x 10 in')).toEqual(100)
      expect(getInches('5 asdfhlh 10 as;ldfhalksdf')).toEqual(50)
    })
  })
})
