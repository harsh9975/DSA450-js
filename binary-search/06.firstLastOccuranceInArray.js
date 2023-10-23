let arr = [3, 4, 13, 13, 13, 20, 40];
let n = arr.length;
let k = 13;
let ans = getLastOccuranceOptimal(arr, n, k);
console.log("ans: ", ans);

function getOccuranceNaive(arr, n, k) {
  let res = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] == k) {
      res = i;
      break;
      //add break to get the first last occurance
    }
  }
  return res;
}

function getOccuranceOptimal(arr, n, k) {
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

function getLastOccuranceOptimal(arr, n, k) {
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
