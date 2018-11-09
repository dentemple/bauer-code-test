'use strict'

/**
 * Create interfaces for the given json files based off of a shallow copy of each.
 */

function createInterface(json) {
  return { ...json }
}

module.exports = {
  bidders: createInterface(require('../bidders.json')).bidders,
  items: createInterface(require('../items.json')).items,
  winningBids: createInterface(require('../winning_bids.json')).winningBids,
  preferences: require('./preferences'),
  createInterface
}
