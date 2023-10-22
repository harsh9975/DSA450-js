let arr = [
  [1, 3, 8],
  [2, 3, 4],
  [1, 2, 5],
];
let row = arr.length;
let col = arr[0].length;
let ans = findMedianOptimal(arr, row, col);
console.log("ans", ans);

function findMedianNaive(arr, row, col) {
  let median = new Array(row * col);

  let index = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      median[index] = arr[i][j];
      index++;
    }
  }

  median.sort((a, b) => a - b);
  return median[Math.floor((row * col) / 2)];
}

//TC: O(row*log col)
function findMedianOptimal(arr, row, col) {
  let low = 1;
  let high = 1000000000;
  let n = row;
  let m = col;
  while (low <= high) {
    let mid = Math.floor((low + high) >> 1);
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      cnt += countSmallerThanMid(arr[i], mid, col);
    }
    if (cnt <= (n * m) / 2) low = mid + 1;
    else high = mid - 1;
  }
  return low;
}

function countSmallerThanMid(arr, mid, n) {
  let l = 0,
    h = n - 1;
  while (l <= h) {
    let md = (l + h) >> 1;
    if (arr[md] <= mid) {
      l = md + 1;
    } else {
      h = md - 1;
    }
  }
  return l;
}
