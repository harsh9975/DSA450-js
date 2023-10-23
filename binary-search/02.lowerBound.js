let arr = [3, 5, 8, 15, 19];
let n = 5;
let x = 9;
let ind = lowerBoundOptimal(arr, n, x);
console.log("The lower bound is the index:", ind);

//TC: O(n) SC:O(1)
function lowerBoundNaive(arr, n, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] >= x) {
      // lower bound found:
      return i;
    }
  }
  return n;
}

function lowerBoundOptimal(arr, n, x) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
