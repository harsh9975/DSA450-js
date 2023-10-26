let arr = [5, 4, 5, 2, 3, 4, 5, 6];
let n = arr.length;
let day = 5;
let ans = shipPackageOptimal(arr, n, day);
console.log("ans: ", ans);

function shipPackageNaive(arr, n, day) {
  let ans = 0;
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, weight) => weight + acc, 0);

  for (let i = max; i < sum; i++) {
    if (findDay(arr, n, i) <= day) {
      return i;
    }
  }
  return -1;
}

function findDay(arr, n, cap) {
  let day = 1;
  let load = 0;
  for (let i = 0; i < n; i++) {
    if (load + arr[i] > cap) {
      day++;
      load = arr[i];
    } else {
      load += arr[i];
    }
  }
  return day;
}

function shipPackageOptimal(arr, n, day) {
  let low = Math.max(...arr);
  let high = arr.reduce((acc, weight) => acc + weight, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = findDay(arr, n, mid);
    if (val <= day) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
