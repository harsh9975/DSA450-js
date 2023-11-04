let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "SEE";
console.log(wordSearch(board, word));
function wordSearch(board, word) {
  let n = board.length;
  let m = board[0].length;

  let index = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == word[index]) {
        if (searchNext(board, word, i, j, index, n, m)) {
          return true;
        }
      }
    }
  }
  return false;
}

function searchNext(board, word, row, col, index, n, m) {
  if (index == word.length) {
    return true;
  }
  if (
    row < 0 ||
    col < 0 ||
    row == n ||
    col == m ||
    board[row][col] !== word[index] ||
    board[row][col] == "!"
  ) {
    return false;
  }

  let c = board[row][col];
  board[row][col] = "!";

  let top = searchNext(board, word, row - 1, col, index + 1, n, m);
  let bottom = searchNext(board, word, row + 1, col, index + 1, n, m);
  let left = searchNext(board, word, row, col - 1, index + 1, n, m);
  let right = searchNext(board, word, row, col + 1, index + 1, n, m);
  board[row][col] = c;
  return top || bottom || left || right;
}
