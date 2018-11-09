'use strict'

const composer = x => ({
  map: func => composer(func(x)),
  resolve: func => func(x),
  inspect: () => `composer(${x})`
})

module.exports = composer
