'use strict'

/**
 * Declarative sugar for wrapping an arbitrary value in a array
 *    just to use the .map method.  Useful for composability.
 * Instead of saying this:
 *        [0].map(x => x + 1).map(x => x + 1) // Returns 2
 * We can say this:
 *        composer(0).map(x => x + 1).resolve(x => x + 1) // Returns 2
 *
 * @param {*} x - Any arbitrary value
 */

const composer = x => ({
  map: func => composer(func(x)),
  resolve: func => func(x),
  inspect: () => `composer(${x})`
})

module.exports = composer
