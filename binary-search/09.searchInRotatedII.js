let arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;
let n = arr.length;
let ans = searchArray(arr, n, k);
if (!ans) {
  console.log("Target is not present.");
} else {
  console.log("Target is present in the array.");
}

function searchArray(arr, n, k) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) return mid;
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= k && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
