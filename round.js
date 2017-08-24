
function round(x, p) {
  var q = Math.pow(10, p);
  return Math.round(q * x + q / 1e16) / q;
}

module.exports = round;
