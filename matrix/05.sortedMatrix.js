let mat = [
  [40, 94, 73, 98, 27],
  [58, 89, 87, 95, 9],
  [95, 28, 34, 74, 32],
  [19, 46, 78, 64, 80],
  [72, 62, 86, 16, 99],
];

let n = mat.length;
console.log("before: ", mat);
sortMatrixOptimal(mat, n);
console.log("after: ", mat);

function sortMatrix(mat, n) {
  let temp = new Array(n * n);
  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[k++] = mat[i][j];
    }
  }
  temp.sort((a, b) => a - b);
  k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mat[i][j] = temp[k++];
    }
  }
}

function sortMatrixOptimal(matrix, n) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let flatArray = [].concat(...matrix);
  let index = 0;
  flatArray.sort((a, b) => a - b);
  let res = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      matrix[i][j] = flatArray[index];
      index++;
    }
  }
  return matrix;
}

function sortMatrixRowWiseColWise(mat, n) {
  sortByRow(mat, n);
  transpose(mat, n);
  sortByRow(mat, n);
  transpose(mat, n);
}

function sortByRow(mat, n) {
  for (let i = 0; i < n; i++) {
    mat[i].sort((a, b) => a - b);
  }
}

function transpose(mat, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }
}
