let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let rotated = rotateMatOptimal(arr);
console.log("rotated matrix: ", rotated);

//TC: O(n2) SC: O(n2)
function rotateMatNaive(arr) {
  let n = arr.length;
  let ans = [[], [], []];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][n - i - 1] = arr[i][j];
    }
  }
  return ans;
}

//TC: O(n2+n2) SC:O(1)
function rotateMatOptimal(arr) {
  let n = arr.length;
  let m = arr[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < m; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[i][n - 1 - j];
      arr[i][n - 1 - j] = temp;
    }
  }

  return arr;
}
