'use strict'

const { bidders, items } = require('./data')
const { auction, preferences } = require('./src')

// console.log({
//   winningBids: auction({
//     bidders,
//     items,
//     preferences
//   }),
//   history
// })

module.exports = {
  winningBids: auction({
    bidders,
    items,
    preferences
  })
}
