// Example usage:
const arr1 = [1, 5, 8, 10];
const k1 = 2;
console.log(getMinDiffBetter(arr1, arr1.length, k1));

const arr2 = [3, 9, 12, 16, 20];
const k2 = 3;
console.log(getMinDiffBetter(arr2, arr2.length, k2));

function getMinDiffBruteforce(arr, n, k) {
  if (n === 1) {
    return 0;
  }

  arr.sort((a, b) => a - b);
  let ans = arr[n - 1] - arr[0];

  for (let i = 1; i < n; i++) {
    const min_height = Math.min(arr[0] + k, arr[i] - k);
    const max_height = Math.max(arr[n - 1] - k, arr[i - 1] + k);
    ans = Math.min(ans, max_height - min_height);
  }

  return ans;
}

function getMinDiffBetter(arr, n, k) {
  if (n === 1) {
    return 0;
  }

  arr.sort((a, b) => a - b);
  let ans = arr[n - 1] - arr[0];

  let small = arr[0] + k;
  let big = arr[n - 1] - k;

  if (small > big) {
    [small, big] = [big, small];
  }

  for (let i = 1; i < n - 1; i++) {
    const subtract = arr[i] - k;
    const add = arr[i] + k;

    if (subtract >= small || add <= big) {
      continue;
    }

    if (big - subtract <= add - small) {
      small = subtract;
    } else {
      big = add;
    }
  }

  return Math.min(ans, big - small);
}

// Optimal Approach
function getMinDiffOptimal(arr, n, k) {
  if (n === 1) {
    return 0;
  }

  arr.sort((a, b) => a - b);
  let ans = arr[n - 1] - arr[0];

  let small = arr[0] + k;
  let big = arr[n - 1] - k;

  if (small > big) {
    [small, big] = [big, small];
  }

  for (let i = 1; i < n - 1; i++) {
    const height = arr[i];
    const subtract = height - k;
    const add = height + k;

    if (subtract >= small || add <= big) {
      continue;
    }

    if (big - subtract <= add - small) {
      small = subtract;
    } else {
      big = add;
    }
  }

  return Math.min(ans, big - small);
}
