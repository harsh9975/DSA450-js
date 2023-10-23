let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
let ind = search(a, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);

function search(a, target) {
  return binarySearch(a, target);
}
//TC: O(logn)
function binarySearch(a, target) {
  let low = 0;
  let high = a.length;
  if (low > high) return -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (a[mid] == target) {
      return mid;
    } else if (a[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
