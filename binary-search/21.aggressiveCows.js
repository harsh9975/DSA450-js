var stalls = [0, 3, 4, 7, 10, 9];
var k = 4;
var ans = aggressiveCowsNaive(stalls, k);
console.log("The maximum possible minimum distance is:", ans);

function aggressiveCowsNaive(stalls, k) {
  let n = stalls.length;
  stalls.sort((a, b) => a - b);
  let limit = stalls[n - 1] - stalls[0];
  for (let i = 1; i < limit; i++) {
    if (canWePlace(stalls, i, k) === false) {
      return i - 1;
    }
  }
  return limit;
}

function canWePlace(stalls, dist, cows) {
  let n = stalls.length;
  let cntCows = 1;
  let last = stalls[0];
  for (let i = 1; i < n; i++) {
    if (stalls[i] - last >= dist) {
      cntCows++;
      last = stalls[i];
    }
    if (cntCows >= cows) return true;
  }
  return false;
}

function aggressiveCowsOptimal(stalls, k) {
  let n = stalls.length;
  stalls.sort((a, b) => a - b);

  let low = 1,
    high = stalls[n - 1] - stalls[0];
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canWePlace(stalls, mid, k)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
