'use strict'

const composer = require('./composer')

const matchNonDigits = /\D/g
const remove = ''

const convertToDollars = str =>
  composer(str)
    .map(str => str.replace(matchNonDigits, remove))
    .resolve(str => +str)

module.exports = convertToDollars
