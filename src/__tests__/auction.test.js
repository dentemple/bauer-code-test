'use strict'

describe('silent auction', () => {
  const { bidders, items, preferences, winningBids } = require('../../data')
  const auction = require('../auction')

  it('returns an expected data type', () => {
    const result = auction({
      bidders,
      items,
      preferences
    })

    expect(typeof auction).toBe('function')
    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
  })

  it('returns the expected data', () => {
    const result = auction({
      bidders,
      items,
      preferences
    })
    expect(result).toEqual(winningBids)
  })
})
