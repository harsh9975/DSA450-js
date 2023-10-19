let arr = [4, 2, -3, 1, 6];
let n = arr.length;
let k = 0;
console.log("subarray with sum k", findSubarrayOtimal(arr, n, k));

// TC: O(n2)
function findSubarrayNaive(arr, n, k) {
  //to find max sum
  let max = 0;
  //to find min sum
  let min = 0;
  //to check if sum present;
  let isPresent = false;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) {
        // max = Math.max(max,sum);
        // min = Math.min(min,sum);
        isPresent = true;
        break;
      }
    }
  }
  return isPresent;
}

// TC: O(n)
function findSubarrayOptimal(arr, n, k) {
  let k = 0;
  let sum = 0;
  let isPresent = false;
  let prefixSum = new Set();

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum === k || prefixSum.has(sum - k)) {
      isPresent = true;
      break;
    }

    prefixSum.add(sum);
  }

  return isPresent;
}
