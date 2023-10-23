let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let n = arr.length;
let ans = findMinBetter(arr, n);
console.log("The minimum element is: " + ans);

//naive approach O(n)

//better approach
function findMinBetter(arr, n) {
  let low = 0;
  let high = n - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}
