const matrix = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 0],
];
const n = 3,
  m = 3;
console.log(
  "The row with maximum no. of 1's is: " + rowWithMax1Optimal(matrix, n, m)
);

//TC: O(n*m) SC:O(1)
function rowWithMax1Naive(mat, n, m) {
  let maxCount = 0;
  let index = -1;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == 1) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  return index;
}

function lowerBound(arr, n, target) {
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function rowWithMax1Optimal(mat, n, m) {
  let maxCount = 0;
  let index = -1;
  for (let i = 0; i < n; i++) {
    let count = m - lowerBound(mat[i], m, 1);
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  return index;
}
