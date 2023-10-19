let arr = [6, -3, -10, 0, 2];
let n = arr.length;
console.log("max product", getMaxProdOptimal(arr, n));

//TC: O(n2) SC: O(1)
function getMaxProdNaive(arr, n) {
  let max = 1;
  for (let i = 0; i < n; i++) {
    let mul = 1;
    for (let j = i; j < n; j++) {
      mul *= arr[j];
      max = Math.max(max, mul);
    }
  }
  return max;
}

//TC: O(n)
function getMaxProdOptimal(arr, n) {
  let maxEnd = arr[0];
  let minEnd = arr[0];
  let maxProd = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] < 0) {
      let temp = maxEnd;
      maxEnd = minEnd;
      minEnd = temp;
    }

    maxEnd = Math.max(arr[i], maxEnd * arr[i]);
    minEnd = Math.min(arr[i], minEnd * arr[i]);
    maxProd = Math.max(maxProd, maxEnd);
  }
  return maxProd;
}
