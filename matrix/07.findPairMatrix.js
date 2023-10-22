let mat = [
  [1, 2, -1, -4, -20],
  [-8, -3, 4, 2, 1],
  [3, 8, 6, 1, 3],
  [-4, -1, 1, 7, -6],
  [0, -4, 10, -5, 1],
];
let n = mat.length;
let ans = findPairOptimal(mat, n);
console.log("ans: ", ans);

//TC: O(n4) SC:O(1)
function findPairNaive(mat, n) {
  let maxVal = Number.MIN_VALUE;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      for (let k = i + 1; k < n; k++) {
        for (let l = j + 1; l < n; l++) {
          if (maxVal < mat[k][l] - mat[i][j]) {
            maxVal = mat[k][l] - mat[i][j];
          }
        }
      }
    }
  }
  return maxVal;
}

function findPairOptimal(mat, n) {
  let maxValue = Number.MIN_VALUE;
  let maxArr = new Array(n);
  for (let i = 0; i < n; i++) {
    maxArr[i] = new Array(n);
  }

  maxArr[n - 1][n - 1] = mat[n - 1][n - 1];
  let maxv = mat[n - 1][n - 1];
  for (let j = n - 2; j >= 0; j--) {
    if (mat[n - 1][j] > maxv) maxv = mat[n - 1][j];
    maxArr[n - 1][j] = maxv;
  }

  maxv = mat[n - 1][n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (mat[i][n - 1] > maxv) maxv = mat[i][n - 1];
    maxArr[i][n - 1] = maxv;
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      // Update maxValue
      if (maxArr[i + 1][j + 1] - mat[i][j] > maxValue)
        maxValue = maxArr[i + 1][j + 1] - mat[i][j];

      // set maxArr (i, j)
      maxArr[i][j] = Math.max(
        mat[i][j],
        Math.max(maxArr[i][j + 1], maxArr[i + 1][j])
      );
    }
  }

  return maxValue;
}
