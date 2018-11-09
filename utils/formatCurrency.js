'use strict'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

const formatCurrency = num => formatter.format(num)

module.exports = formatCurrency
