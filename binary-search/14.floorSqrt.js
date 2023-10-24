let n = 28;
let ans = floorSqrtOptimal(n);
console.log("The floor of square root of " + n + " is: " + ans);

function floorSqrtNaive(n) {
  let ans = -1;
  for (let i = 0; i < n; i++) {
    let val = i * i;
    if (val <= n) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
}

function floorSqrtOptimal(n) {
  let low = 0;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = mid * mid;
    if (val <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
