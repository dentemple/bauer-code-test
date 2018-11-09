'use strict'

describe('data', () => {
  const { bidders, items, preferences, winningBids } = require('../index')

  describe('bidders', () => {
    const json = require('../../bidders.json')

    it('matches the data provided', () => {
      expect(Array.isArray(bidders)).toBe(true)
      expect(Array.isArray(json.bidders)).toBe(true)
      expect(bidders).toEqual(json.bidders)
    })
  })

  describe('items', () => {
    const json = require('../../items.json')

    it('matches the json file provided', () => {
      expect(Array.isArray(items)).toBe(true)
      expect(Array.isArray(json.items)).toBe(true)
      expect(items).toEqual(json.items)
    })
  })

  describe('winning_bids', () => {
    const json = require('../../winning_bids.json')

    it('matches the json file provided', () => {
      expect(Array.isArray(winningBids)).toBe(true)
      expect(Array.isArray(json.winningBids)).toBe(true)
      expect(winningBids).toEqual(json.winningBids)
    })
  })

  describe('preferences', () => {
    it('returns an expected data type', () => {
      expect(preferences).toBeTruthy()
      expect(typeof preferences).toBe('object')
    })
  })
})
