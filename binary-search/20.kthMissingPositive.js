let arr = [4, 7, 9, 10];
let n = arr.length;
let k = 1;
let res = missingKOptimal(arr, n, k);
console.log("res: ", res);

function missingK(arr, n, k) {
  for (let i = 0; i < n; i++) {
    if (arr[i] <= k) {
      k++;
    }
  }
  return k;
}

function missingKOptimal(arr, n, k) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let missing = arr[mid] - (mid + 1);
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return k + high + 1;
}
