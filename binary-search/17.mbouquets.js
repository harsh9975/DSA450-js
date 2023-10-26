let arr = [7, 7, 7, 7, 13, 11, 12, 7];
let n = arr.length;
let k = 3;
let m = 2;
const ans = getMBouquetsOptimal(arr, n, k, m);
console.log("ans", ans);

function getMBouquetsNaive(arr, n, k, m) {
  let val = m * k;
  if (val > n) return -1;

  let min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }

  for (let i = min; i <= max; i++) {
    if (possible(arr, i, k, m)) {
      return i;
    }
  }
  return -1;
}

function possible(arr, day, k, m) {
  let n = arr.length;
  let cnt = 0;
  let noOfB = 0;
  // Count the number of bouquets
  for (let i = 0; i < n; i++) {
    if (arr[i] <= day) {
      cnt++;
    } else {
      noOfB += Math.floor(cnt / k);
      cnt = 0;
    }
  }
  noOfB += Math.floor(cnt / k);
  return noOfB >= m;
}

function getMBouquetsOptimal(arr, n, k, m) {
  let val = m * k;
  if (val > n) return -1;
  let min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }
  let low = min,
    high = max;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(arr, mid, m, k)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
