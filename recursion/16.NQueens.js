let n = 4;
console.log(solveNQueens(n));

function solveNQueens(n) {
  let board = new Array(n).fill(null).map(() => new Array(n).fill("."));
  let ans = [];
  backtrack(0, board, ans);
  return ans;
}

function backtrack(col, board, ans) {
  if (col == board.length) {
    ans.push(board.map((row) => row.join("")));
    return;
  }

  for (let row = 0; row < board.length; row++) {
    if (validate(board, row, col)) {
      board[row][col] = "Q";
      backtrack(col + 1, board, ans);
      board[row][col] = ".";
    }
  }
}

function validate(board, row, col) {
  let tempRow = row;
  let tempCol = col;

  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") return false;
    row--;
    col--;
  }

  row = tempRow;
  col = tempCol;
  while (col >= 0) {
    if (board[row][col] == "Q") return false;
    col--;
  }

  row = tempRow;
  col = tempCol;
  while (col >= 0 && row < board.length) {
    if (board[row][col] == "Q") return false;
    col--;
    row++;
  }
  return true;
}
