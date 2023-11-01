console.log(myPowIterative(2, 3));
console.log(myPowIterative(2, -3));

console.log(myPowRecursive(2, 3));
console.log(myPowRecursive(2, -3));

function myPowIterative(x, n) {
  if (n == 0) return 1;
  let result = 1;
  let base = x;
  let exponent = Math.abs(n);

  while (exponent > 0) {
    if (exponent % 2 == 1) {
      result *= base;
    }
    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  return n < 0 ? 1 / result : result;
}

function myPowRecursive(x, n) {
  if (n == 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return n % 2 == 0
    ? myPowRecursive(x * x, n / 2)
    : x * myPowRecursive(x * x, Math.floor(n / 2));
}
