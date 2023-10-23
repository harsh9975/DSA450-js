let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let n = 8;
let x = 8;
let ans = countOptimal(arr, n, x);
console.log("The number of occurrences is:", ans);

function countNaive(arr, n, x) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == x) {
      count++;
    }
  }
  return count;
}

function getLastOccuranceOptimal(arr, n, k) {
  let low = 0;
  let high = n - 1;
  let res = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == k) {
      res = mid;
      low = mid + 1;
    } else if (k < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}

function getFirstOccuranceOptimal(arr, n, k) {
  let low = 0;
  let high = n - 1;
  let res = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == k) {
      res = mid;
      high = mid - 1;
    } else if (k < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}

function firstAndLastPosition(arr, n, k) {
  let first = getFirstOccuranceOptimal(arr, n, k);
  if (first === -1) return [-1, -1];
  let last = getLastOccuranceOptimal(arr, n, k);
  return [first, last];
}

function countOptimal(arr, n, x) {
  let [first, last] = firstAndLastPosition(arr, n, x);
  console.log("first", first);
  console.log("last", last);
  if (first === -1) return 0;
  return last - first + 1;
}
