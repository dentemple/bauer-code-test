'use strict'

describe('data', () => {
  const { biddersData, itemsData, winningBidsData } = require('../data')

  describe('bidders', () => {
    const json = require('../bidders.json')

    it('matches the json file provided', () => {
      expect(Array.isArray(biddersData.bidders)).toBe(true)
      expect(Array.isArray(json.bidders)).toBe(true)
      expect(biddersData).toEqual(json)
    })
  })

  describe('items', () => {
    const json = require('../items.json')

    it('matches the json file provided', () => {
      expect(Array.isArray(itemsData.items)).toBe(true)
      expect(Array.isArray(json.items)).toBe(true)
      expect(itemsData).toEqual(json)
    })
  })

  describe('winning_bids', () => {
    const json = require('../winning_bids.json')

    it('matches the json file provided', () => {
      expect(Array.isArray(winningBidsData.winningBids)).toBe(true)
      expect(Array.isArray(json.winningBids)).toBe(true)
      expect(winningBidsData).toEqual(json)
    })
  })
})
