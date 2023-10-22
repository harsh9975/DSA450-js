let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let ans = printSpiral(mat);

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i] + " ");
}

function printSpiral(mat) {
  let ans = [];
  let n = mat.length;
  let m = mat[0].length;
  let top = 0,
    left = 0,
    right = m - 1,
    bottom = n - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(mat[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(mat[i][right]);
    }
    right--;
    for (let i = right; i >= left; i--) {
      ans.push(mat[bottom][i]);
    }
    bottom--;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(mat[i][left]);
      }
      left++;
    }
  }

  return ans;
}
