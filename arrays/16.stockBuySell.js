let arr = [7, 1, 5, 3, 6, 4];
let n = arr.length;
let maxProfit = getMaxProfitOptimal(arr, n);
console.log("max profit: ", maxProfit);

//TC O(n2) SC O(1)
function getMaxProfitNaive(arr, n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        ans = Math.max(ans, arr[j] - arr[i]);
      }
    }
  }
  return ans;
}

//TC O(n) SC: O(1)
function getMaxProfitOptimal(arr, n) {
  let ans = 0;
  let minPrice = Infinity;
  for (let i = 0; i < n; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    ans = Math.max(ans, arr[i] - minPrice);
  }
  return ans;
}
