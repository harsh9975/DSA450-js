const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);
console.log(board);

function solveSudoku(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let c = "1"; c <= "9"; c++) {
          if (isValid(board, i, j, c)) {
            board[i][j] = c.toString();
            if (solveSudoku(board)) return true;
            else board[i][j] = ".";
          }
        }
        return false; // No valid number found for this cell
      }
    }
  }
  return true; // All cells are filled
}

function isValid(board, row, col, c) {
  c = c.toString(); // Convert c to a string for comparison
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === c) {
      return false;
    }
    if (board[row][i] === c) {
      return false;
    }
    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ] === c
    ) {
      return false;
    }
  }
  return true;
}
