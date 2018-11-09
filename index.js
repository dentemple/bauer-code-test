'use strict'

const { bidders, items, preferences } = require('./data')
const { auction } = require('./src')

/*
  Uncomment to print the results to the console
*/
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
