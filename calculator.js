
function adder(x, y) {
  return `x + y is equal to ${x+y}`
}

function multiplier(x, y) {
  return `x * y is equal to ${x*y}`
}

function divider(x, y) {
  return `x / y is equal to ${x/y}`
}

// module.exports = {
//   adder: adder,
//   multiplier: multiplier,
//   divider: divider
// }

export {adder, multiplier, divider}