'use strict'

/**
 * Syntatic sugar for checking if the contents of two arrays are equal.
 *    Provides a declarative alternative from saying this:
 *        type === 'painting' && subject === 'horses'
 *    To saying this:
 *        areEqual([type, subject], ['painting', 'horses'])
 *
 * @param {array} arr1
 * @param {array} arr2
 */

const areEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

module.exports = areEqual
