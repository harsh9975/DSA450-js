const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

const k = 8;
const result = kthSmallest(matrix, k);
console.log(result); // Output: 13

//TC:O(log(N) * R * log(C))
function kthSmallest(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const totalElements = rows * cols;
  let requiredSmallerElements = k;
  let low = matrix[0][0];
  let high = matrix[rows - 1][cols - 1];

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const smallerElements = countSmallerElements(matrix, mid);

    if (smallerElements < requiredSmallerElements) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

function countSmallerElements(matrix, target) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    let start = 0;
    let end = row.length - 1;

    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);

      if (row[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    count += start;
  }

  return count;
}
