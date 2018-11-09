'use strict'

const composer = require('./composer')

const matchNonDigits = /\D/g
const remove = ''

/**
 * Converts a string of dollars (e.g., "$10,000") to a number of dollars (e.g., 10000)
 *
 * @param {string} str - The value to be converted
 */
const convertToDollars = str =>
  composer(str)
    .map(str => str.replace(matchNonDigits, remove))
    .resolve(str => +str)

module.exports = convertToDollars
