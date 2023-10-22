const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let n = mat.length;
let m = mat[0].length;
let target = 8;
let ans = searchMatrixOptimal(mat, n, m, target);
console.log("ans: ", ans);

// TC: O(n*m) SC: O(1)
function searchMatrixNaive(mat, n, m, target) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

//TC: O(N + logM) SC: O(1)
function searchMatrixBetter(mat, n, m, target) {
  for (let i = 0; i < n; i++) {
    if (mat[i][0] <= target && target <= mat[i][m - 1]) {
      return binarySearch(mat[i], target, i);
    }
  }
  return [-1, -1];
}

function binarySearch(arr, target, i) {
  let n = arr.length;
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return [i, mid];
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [-1, -1];
}

// TC: O(log(n*m)) SC: O(1)
function searchMatrixOptimal(arr, n, m, target) {
  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;
    if (arr[row][col] === target) return [row, col];
    else if (arr[row][col] < target) low = mid + 1;
    else high = mid - 1;
  }

  return [-1, -1];
}
