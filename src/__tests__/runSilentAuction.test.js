'use strict'

describe('silent auction', () => {
  const { biddersData, itemsData, winningBidsData } = require('../../data')
  const runSilentAuction = require('../runSilentAuction')
  const generateRules = require('../generateRules')

  it('returns an expected data type', () => {
    const rules = generateRules()

    expect(typeof runSilentAuction).toBe('function')
    expect(runSilentAuction(biddersData, itemsData, rules)).toBeTruthy()
    expect(Array.isArray(runSilentAuction(biddersData, itemsData))).toBe(true)
  })

  xit('returns the expected data', () => {
    const rules = generateRules()

    expect(runSilentAuction(biddersData, itemsData, rules)).toEqual(
      winningBidsData.winningBids
    )
  })
})
