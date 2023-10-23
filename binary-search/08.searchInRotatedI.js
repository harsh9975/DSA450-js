let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let n = 9,
  k = 1;
let ans = searchArray(arr, n, k);
if (ans === -1) console.log("Target is not present.");
else console.log("The index is:", ans);

function searchArray(arr, n, k) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) return mid;
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
