
const tp = require('testpass')

const round = require('.')

tp.test('fraction rounding', (t) => {
  const x = 1 / 3
  t.eq(round(x, 1), 0.3)
  t.eq(round(x, 2), 0.33)
  t.eq(round(x, 3), 0.333)
  t.eq(round(x, 4), 0.3333)
})

// You should use `Math.round` instead.
tp.test('integer rounding', (t) => {
  t.eq(round(0.1, 0), 0)
  t.eq(round(0.5, 0), 1)
  t.eq(round(-0.5, 0), -0)
})

// A common problem for other implementations.
tp.test('round 1.005 to 1.01', (t) => {
  t.eq(round(1.005, 2), 1.01)
})

// A number ending in repeating 9s with 16 decimals
// is considered equal to its closest number.
tp.test('round 1.0049999999999999 to 1.01', (t) => {
  const x = 1.0049999999999999
  t.eq(1.005 === x, true)
  t.eq(round(x, 2), 1.01)
})

// However, a number ending in repeating 9s with
// 15 decimals is not considered equal.
tp.test('rounds 1.004999999999999 to 1.00', (t) => {
  const x = 1.004999999999999
  t.eq(1.005 === x, false)
  t.eq(round(x, 2), 1)
})

tp.test('does not work with 1e-16 and smaller', (t) => {
  t.eq(round(1e-15, 15), 1e-15)
  t.ne(round(1e-16, 16), 1e-16)
  t.ne(round(1e-17, 17), 1e-17)
})

