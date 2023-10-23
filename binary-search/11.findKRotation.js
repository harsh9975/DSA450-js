let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findKRotation(arr);
console.log("The array is rotated " + ans + " times.");

function findKRotation(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let index = -1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[high]) {
      if (arr[low] < ans) {
        index = low;
        ans = arr[low];
      }
      break;
    }

    if (arr[low] <= arr[mid]) {
      if (arr[low] < ans) {
        index = low;
        ans = arr[low];
      }

      // Eliminate left half:
      low = mid + 1;
    } else {
      if (arr[mid] < ans) {
        index = mid;
        ans = arr[mid];
      }

      // Eliminate right half:
      high = mid - 1;
    }
  }
  return index;
}
