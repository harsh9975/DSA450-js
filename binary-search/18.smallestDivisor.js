let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let limit = 8;
let ans = smallestDivisorOptimal(arr, n, limit);
console.log("ans: ", ans);

function smallestDivisorNaive(arr, n, limit) {
  let max = -Infinity;
  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    max = Math.max(arr[i], max);
  }

  for (let i = 1; i <= max; i++) {
    let divisorSum = getDivisorSum(arr, n, i);
    if (divisorSum <= limit) {
      ans = Math.min(ans, i);
    }
  }
  return ans;
}

function getDivisorSum(arr, n, k) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.ceil(arr[i] / k);
  }
  return ans;
}

function smallestDivisorOptimal(arr, n, limit) {
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    max = Math.max(arr[i], max);
  }
  let low = 1,
    high = max;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let divisorSum = getDivisorSum(arr, n, mid);
    if (divisorSum >= limit) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}
