let arr = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  k = 3;
console.log(longestOnes(arr, k));

function longestOnes(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let window = 0;
  let ans = 0;

  while (right < n) {
    window += arr[right];
    while (window + k < right - left + 1) {
      window -= arr[left];
      left++;
    }
    ans = Math.max(ans, right - left + 1);
    right++;
  }
  return ans;
}
