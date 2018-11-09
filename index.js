'use strict'

const { bidders, items, preferences } = require('./data')
const { auction } = require('./src')

// console.log({
//   winningBids: auction({
//     bidders,
//     items,
//     preferences
//   })
// })

module.exports = {
  winningBids: auction({
    bidders,
    items,
    preferences
  })
}
