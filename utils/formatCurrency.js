'use strict'

/**
 * Converts a number of dollars (e.g., 10000) to a string of dollars (e.g., "$10,000")
 *
 * @param {string} str - The value to be converted
 */

/*
  More about Intl.NumberFormat:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
*/
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

const formatCurrency = num => formatter.format(num)

module.exports = formatCurrency
