'use strict'

/**
 * Create interfaces for the given json files. Generates a shallow copy of each.
 */

function createInterface(file) {
  return { ...file }
}

module.exports = {
  biddersData: createInterface(require('../bidders.json')),
  itemsData: createInterface(require('../items.json')),
  winningBidsData: createInterface(require('../winning_bids.json')),
  createInterface
}
