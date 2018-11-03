'use strict'

const { biddersData, itemsData } = require('./data')
const { generateRules, runSilentAuction } = require('./src')

const rules = generateRules()

module.exports = {
  winningBids: runSilentAuction(biddersData, itemsData, rules)
}
