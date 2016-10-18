
const generators = require('./generators')
const modifiers = require('./modifiers')
const { merge } = require('./utils')

/**
 * X - Any symbol (a-zA-Z0-9)
 * A - Any alphabetic (A-Za-z)
 * F - Hex letter (a-fA-F)
 * H - Any HEX symbol (a-fA-F0-9)
 * D - Any digit symbol (0-9)
 * O - Octal symbol (0-7)
 */

const DEFAULTS = {
  symbols: {
    X: 'symbol',
    A: 'alphabetic',
    F: 'hexletter',
    H: 'hexsymbol',
    D: 'digit',
    O: 'octal',
  },
  mods: [],
}

const loadGenerator = (generator, value) => ({
  string: () => generators[generator] ? generators[generator](value) : value,
  function: () => generator(value),
  undefined: () => value,
})[typeof generator]()

module.exports = function generate(mask, options_ = {}) {
  const options = merge(DEFAULTS, options_)

  const result = mask.split('').map(symbol =>
    loadGenerator(options.symbols[symbol], symbol)
  ).join('')

  return options.mods && options.mods.reduce((val, func) => modifiers[func](val), result)
}
