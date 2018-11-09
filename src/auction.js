'use strict'

/**
 * Runs the auction. Configured as a recursive call to calculate each,
 *    item, with each successive iteration simulating the game rounds
 *
 * @param {Object} param - Collection of named arguments
 * @param {array} param.items - Provided set of items; each item represents one round
 * @param {array} param.bidders - Provided set of players
 * @param {Object} param.preferences - Set of attributes and multipliers for each player
 * @param {array} [winningBids] - Utilized by the recursive loop to store the final results;
 *                                    can be optionally preloaded with previous results
 */

const { composer, convertToDollars, formatCurrency } = require('../utils')

function auction(
  { bidders: currentBidders, items, preferences },
  winningBids = []
) {
  // Check if the auction is complete
  if (items.length === 0) return winningBids

  // Only a single item should be handled each round; the remaining items
  //    will be passed to the next recursive call
  const [currentItem, ...remaining] = items

  // A number is expected by the rest of the function's core functionality
  const startingBid = convertToDollars(currentItem.startingBid)

  // Bids are calculated through composition; a composer function is utilized
  //    to ensure the thread of execution follows a predicatable flow.
  //    This composer function is an alternative for wrapping a primitive value
  //    in an array just use the map function; it will require a final "resolve"
  //    call to end the composition chain.
  const bids = currentBidders
    // Compose bidders into bids
    .map(({ name, money: originalMoney }) => {
      // Store the current bidder's preferences to closure
      const { ceiling, multipliers } = preferences[name]
      return (
        // Compose the bidder's current total into a bid total
        composer(originalMoney)
          // Convert to number
          .map(money => convertToDollars(money))
          // Check if the bidder still has money available
          .map(money => (startingBid <= money ? startingBid : 0))
          // If the bidder has enough money, adjust the bid based on their preferences
          .map(bid => {
            if (bid > 0)
              // Run through each preference function
              return multipliers.reduce(
                (bid, multiplier) =>
                  // Compose the current bid with the necessary adjustments
                  composer(bid)
                    // Calculate the necessary updates to the bid
                    .map(bid => multiplier({ bid, ...currentItem }))
                    // Check to make sure we don't surpass the bidder's ceiling
                    .map(bid => (ceiling && bid > ceiling ? ceiling : bid))
                    // Check to make sure we don't surpass the bidder's remaining money
                    .resolve(
                      bid => (bid > originalMoney ? originalMoney : bid)
                    ),
                // Initial value
                bid
              )
            // Bidder has no money
            return 0
          })
          // Convert to the expected format; an extra property has been temporarily added
          //    so that we can both sort on the bid total and keep it as a string as well
          .resolve(bid => ({
            bid: formatCurrency(bid),
            title: currentItem.title,
            winner: name,
            temp: bid
          }))
      )
    })
    // Move the winning bid to the head of the array
    .sort((a, b) => b.temp - a.temp)

  // Retrieve the winning bid from the head of the array
  const winner = bids[0]

  // Remove the temporary value
  delete winner.temp

  // Package for the next iteration
  const nextRound = {
    bidders: currentBidders,
    items: remaining,
    preferences
  }

  // Tail-order recursion is used here to guard against stack overflow
  return auction({ ...nextRound }, [...winningBids, winner])
}

module.exports = auction
