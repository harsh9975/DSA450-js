image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1,
  sc = 1;
let color = 2;

let finalans = floodFill(image, sr, sc, color);
console.log("ans", finalans);

function floodFill(image, sr, sc, color) {
  let current = image[sr][sc];
  if (current === color) {
    return image;
  }
  let ans = [...image];
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  dfs(image, sr, sc, color, direction, ans, current);
  return ans;
}

function dfs(image, row, col, color, direction, ans, current) {
  if (
    row < 0 ||
    row >= image.length ||
    col < 0 ||
    col >= image[0].length ||
    image[row][col] !== current
  ) {
    return;
  }
  ans[row][col] = color;
  for (let d of direction) {
    let r = row + d[0];
    let c = col + d[1];
    dfs(image, r, c, color, direction, ans, current);
  }
}
