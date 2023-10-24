let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
let ans = findPeakElementOptimal(arr);
console.log("The peak is at index:", ans);

function findPeakElementNaive(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (
      (i == 0 || arr[i - 1] < arr[i]) &&
      (i == n - 1 || arr[i] > arr[i + 1])
    ) {
      return i;
    }
  }
  return -1;
}

function findPeakElementOptimal(arr) {
  let n = arr.length;
  if (n == 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return arr[n - 1];

  let low = 1,
    high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
