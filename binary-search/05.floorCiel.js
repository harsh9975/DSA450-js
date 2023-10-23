let arr = [3, 4, 4, 7, 8, 10];
let n = 6,
  x = 8;
let ans = getFloorAndCeil(arr, n, x);
console.log("The floor and ceil are:", ans[0], ans[1]);

function getFloorAndCeil(arr, n, x) {
  let f = findFloor(arr, n, x);
  let c = findCiel(arr, n, x);
  return [f, c];
}

function findFloor(arr, n, x) {
  let low = 0;
  let high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

function findCiel(arr, n, x) {
  let low = 0;
  let high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
