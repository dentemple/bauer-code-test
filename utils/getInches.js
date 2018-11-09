'use strict'

const matchNums = /\d+/g
const initialMultiplier = 1

const getInches = str =>
  str
    .match(matchNums)
    .reduce((acc, element) => acc * element, initialMultiplier)

module.exports = getInches
