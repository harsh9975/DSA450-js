var minFallingPathSumMemo = function (matrix) {
  const memo = {};
  const n = matrix.length;

  let minSum = Infinity;

  for (let col = 0; col < n; col++) {
    minSum = Math.min(minSum, findMinPath(matrix, 0, col, memo));
  }

  return minSum;
};

function findMinPath(matrix, row, col, memo) {
  if (row === matrix.length - 1) {
    // Reached the last row
    return matrix[row][col];
  }

  const key = `${row}-${col}`;
  if (key in memo) {
    return memo[key];
  }

  const nextCols = [col - 1, col, col + 1].filter(
    (c) => c >= 0 && c < matrix.length
  );
  let minPathSum = Infinity;

  for (const nextCol of nextCols) {
    const pathSum =
      matrix[row][col] + findMinPath(matrix, row + 1, nextCol, memo);
    minPathSum = Math.min(minPathSum, pathSum);
  }

  memo[key] = minPathSum;

  return minPathSum;
}

var minFallingPathSumTab = function (matrix) {
  const n = matrix.length;

  // Create a DP array to store the minimum falling path sums
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

  // Initialize the DP array with the values from the last row of the matrix
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = matrix[n - 1][i];
  }

  // Build the DP array from the second-to-last row to the first row
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      const nextCols = [col - 1, col, col + 1].filter((c) => c >= 0 && c < n);
      let minPathSum = Infinity;

      for (const nextCol of nextCols) {
        const pathSum = matrix[row][col] + dp[row + 1][nextCol];
        minPathSum = Math.min(minPathSum, pathSum);
      }

      dp[row][col] = minPathSum;
    }
  }

  // The minimum falling path sum is the minimum value in the first row of the DP array
  return Math.min(...dp[0]);
};

const matrix1 = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];
console.log("memo: ", minFallingPathSumMemo(matrix1));
console.log("tab: ", minFallingPathSumTab(matrix1));

const matrix2 = [
  [-19, 57],
  [-40, -5],
];
console.log("memo: ", minFallingPathSumMemo(matrix2));
console.log("tab: ", minFallingPathSumTab(matrix2));
