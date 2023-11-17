let nums = [1, 1, 2, 1, 1],
  k = 3;

console.log(numberOfSubarrays(nums, k));
function numberOfSubarrays(nums, k) {
  let n = nums.length;
  let left = 0;
  let right = 0;
  let niceSubArray = 0;
  let result = 0;
  let countOdd = 0;

  while (right < n) {
    if (nums[right] % 2 !== 0) {
      countOdd++;
    }
    if (countOdd === k) {
      niceSubArray = 0;
    }

    while (countOdd >= k) {
      if (nums[left] % 2 !== 0) {
        countOdd--;
      }
      left++;
      niceSubArray++;
    }
    result += niceSubArray;
    right++;
  }
  return result;
}
