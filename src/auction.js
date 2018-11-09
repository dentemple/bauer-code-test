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

const { composer, convertToDollars, formatCurrency } = require('../utils')

function auction(
  { bidders: currentBidders, items, preferences },
  winningBids = []
) {
  // Check if the auction is complete
  if (items.length === 0) return winningBids

  // Only a single item should be handled each round
  const [currentItem, ...remaining] = items
  // The following bid calculations will expect the starting bid to be a number
  const startingBid = convertToDollars(currentItem.startingBid)

  const bids = currentBidders
    .map(({ name, money: originalMoney }) => {
      const { ceiling, multipliers } = preferences[name]
      return (
        composer(originalMoney)
          // Convert, since the starting money is still in a string format
          .map(money => convertToDollars(money))
          // Check if the bidder still has money available
          .map(money => (startingBid <= money ? startingBid : 0))
          // If the bidder has enough money, run their preferences
          .map(bid => {
            if (bid > 0) {
              return multipliers.reduce(
                (bid, multiplier) =>
                  composer(bid)
                    // Calculate any necessary updates to the bid
                    .map(bid => multiplier({ bid, ...currentItem }))
                    // Check to make sure we don't surpass the bidder's ceiling
                    .map(bid => (ceiling && bid > ceiling ? ceiling : bid))
                    // Check to make sure we don't surpass the bidder's remaining money
                    .resolve(
                      bid => (bid > originalMoney ? originalMoney : bid)
                    ),
                bid // Initial value
              )
            }
            return 0 // Bidder has no money to bid
          })
          // Convert to the expected format; an extra property has been temporarily added
          //    so that we can both sort on the bid total and keep it as a string as well
          .resolve(value => ({
            bid: formatCurrency(value),
            title: currentItem.title,
            winner: name,
            value
          }))
      )
    })
    .sort((a, b) => b.value - a.value)

  const winner = bids[0]
  delete winner.value

  const nextRound = {
    bidders: currentBidders,
    items: remaining,
    preferences
  }

  // Using tail-order recursion to guard against stack overflow
  return auction({ ...nextRound }, [...winningBids, winner])
}

module.exports = auction
