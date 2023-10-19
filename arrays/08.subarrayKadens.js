const arr = [5, 4, -1, 7, 8];
const n = arr.length;
const maxSum = maxSubarraySumOptimal(arr, n);
console.log(`The maximum subarray sum is: ${maxSum}`);

//tc O(n^3)
function maxSubarraySumNaive(arr, n) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }

      max = Math.max(max, sum);
    }
  }
  return max;
}

//tc O(n2)
function maxSubarraySumBetter(arr, n) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i, n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}

function maxSubarraySumOptimal(arr, n) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
