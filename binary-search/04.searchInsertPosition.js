let arr = [1, 2, 4, 7];
let x = 6;
let ind = searchInsert(arr, x);
console.log("The index is:", ind);

function searchInsert(arr, x) {
  let n = arr.length;
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
