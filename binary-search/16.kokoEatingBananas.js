let arr = [7, 15, 6, 3];
let h = 8;
let ans = minimumRateToEatBananasOptimal(arr, h);
console.log("Koko should eat at least " + ans + " bananas/hr.");

//Naive approach
// TC: O(max(a[]) * N)
function minimumRateToEatBananasNaive(arr, h) {
  let max = findMaxVal(arr);

  for (let i = 1; i <= max; i++) {
    let reqTime = calculateTotalHours(arr, i);
    if (reqTime <= h) {
      return i;
    }
  }
}

//TC: O(N * log(max(a[]))),
function minimumRateToEatBananasOptimal(arr, h) {
  let low = 1;
  let high = findMaxVal(arr);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalTime = calculateTotalHours(arr, mid);
    console.log("total", totalTime);
    if (totalTime <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function findMaxVal(arr) {
  let n = arr.length;
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, arr[i]);
  }
  return ans;
}

function calculateTotalHours(arr, h) {
  let totalH = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    totalH += Math.ceil(arr[i] / h);
  }
  return totalH;
}
