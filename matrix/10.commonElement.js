let mat = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9],
];

function commonElements(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const common = new Map();

  for (let j = 0; j < n; j++) {
    common.set(mat[0][j], true);
  }

  for (let i = 1; i < m; i++) {
    const row = mat[i];
    const currentRow = new Map();

    for (let j = 0; j < n; j++) {
      if (common.has(row[j])) {
        currentRow.set(row[j], true);
      }
    }

    common.clear();
    for (const [key] of currentRow) {
      common.set(key, true);
    }
  }

  for (const [key] of common) {
    console.log(key + " ");
  }
}

commonElements(mat);
