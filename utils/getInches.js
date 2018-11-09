'use strict'

const matchNums = /\d+/g
const initialMultiplier = 1

/**
 * Takes a string of dimensions (e.g., "10in x 10in") and returns the numeric area (e.g., 100)
 *
 * @param {string} str - The string to be converted
 */
const getInches = str =>
  str
    .match(matchNums)
    .reduce((acc, element) => acc * element, initialMultiplier)

module.exports = getInches
