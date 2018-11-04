'use strict'

/**
 * NOTES. Utilizes the call stack to simulate the game loop
 *
 *
 * @param {Object} param0 - Collection of named arguments
 * @param {Array} param0.items
 * @param {Array} param0.bidders
 * @param {Object} param0.preferences
 *
 * @param {Array} winningBids
 *
 */

function auction(
  { bidders: currentBidders, items, preferences },
  winningBids = []
) {
  // Check if the auction is complete
  if (items.length === 0) return winningBids

  // Only a single item should be handled each round
  const [currentItem, ...remaining] = items

  // Run bids
  const winner = currentItem

  const nextRound = {
    bidders: currentBidders,
    items: remaining,
    preferences
  }

  // Tail-order recursion to prevent stack overflow
  return auction({ ...nextRound }, [...winningBids, winner])
}

module.exports = auction
