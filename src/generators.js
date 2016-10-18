
const { rand, range } = require('./utils')

const digits = range(48, 57).map(s => String.fromCharCode(s))
const lettersUpper = range(65, 90).map(s => String.fromCharCode(s))
const lettersLower = lettersUpper.map(s => s.toLowerCase())
const letters = [].concat(lettersUpper, lettersLower)
const all = [].concat(digits, letters)

const hexLetters = [].concat(lettersUpper.slice(0, 6), lettersLower.slice(0, 6))
const hexSymbols = [].concat(digits, hexLetters)

/**
 * a-zA-Z0-9
 */
exports.symbol = function symbols() {
  return all[rand(all.length)]
}

/**
 * a-zA-Z
 */
exports.alphabetic = function alphabetic() {
  return letters[rand(letters.length)]
}

/**
 * a-fA-F
 */
exports.hexletter = function hexletter() {
  return hexLetters[rand(hexLetters.length)]
}

/**
 * a-fA-F9-0
 */
exports.hexsymbol = function hexsymbol() {
  return hexSymbols[rand(hexSymbols.length)]
}

/**
 * 0-9
 */
exports.digit = function digit() {
  return digits[rand(digits.length)]
}

/**
 * 0-7
 */
exports.octal = function octal() {
  return String(rand(8))
}
