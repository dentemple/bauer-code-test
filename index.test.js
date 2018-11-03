'use strict'

describe('app', () => {
  const result = require('./index.js')
  const winningBids = require('./winning_bids.json')

  xit('returns the expected result', () => {
    expect(result).toEqual(winningBids)
  })
})
