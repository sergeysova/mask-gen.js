const merge = require('deepmerge')

/**
 * Get random from 0 to `to` not inclusive
 * @param  {Number} [to=10] Latest value
 * @return {Number}         Random value
 */
const rand = (to = 10) =>
  Math.floor(Math.random() * to)

/**
 * Generate array of integers
 * @param  {Number} from From inclusive
 * @param  {Number} to   To exclusive
 * @return {Number[]}
 */
const range = (from, to) =>
  (new Array(to - from)).fill().map((_, i) => from + i)

module.exports = { rand, range, merge }
