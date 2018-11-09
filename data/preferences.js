'use strict'

const { areEqual, getInches } = require('../utils')

const preferences = {
  'Bob Briskey': {
    ceiling: null,
    multipliers: [
      ({ bid, type, subject }) =>
        areEqual([type, subject], ['painting', 'horses']) ? bid * 2 : bid,
      ({ bid, type, size }) =>
        type === 'painting' && getInches(size) >= 625 ? bid * 2 : bid
    ]
  },
  'Amanda Wu': {
    ceiling: 100000,
    multipliers: [
      ({ bid, type, subject }) =>
        areEqual([type, subject], ['painting', 'Mrs Frisby']) ? bid * 1.5 : bid,
      ({ bid, type, subject }) =>
        areEqual([type, subject], ['painting', 'nature']) ? bid * 1.5 : bid
    ]
  },
  'Sue Perkins': {
    ceiling: null,
    multipliers: [
      ({ bid, type, size }) =>
        type === 'painting' && getInches(size) < 625 ? bid * 2 : 0
    ]
  },
  'Donald von Neuman': {
    ceiling: null,
    multipliers: [
      ({ bid, type, subject }) =>
        areEqual([type, subject], ['painting', 'tomatoes']) ? 0 : bid,
      ({ bid, type, artist }) =>
        areEqual([type, artist], ['painting', 'Shelley Adler']) ? bid * 3 : bid
    ]
  }
}

module.exports = preferences
