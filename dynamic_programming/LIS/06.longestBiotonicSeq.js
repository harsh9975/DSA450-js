function LongestBitonicSequence(nums) {
  const n = nums.length;
  const lis = new Array(n).fill(1);
  const lds = new Array(n).fill(1);

  // Longest Increasing Subsequence
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  // Longest Decreasing Subsequence
  for (let i = n - 2; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] > nums[j] && lds[i] < lds[j] + 1) {
        lds[i] = lds[j] + 1;
      }
    }
  }

  let maxLength = 1;

  // Combining LIS and LDS to find the bitonic sequence
  for (let i = 0; i < n; i++) {
    maxLength = Math.max(maxLength, lis[i] + lds[i] - 1);
  }

  return maxLength;
}

// Example usage:
const nums1 = [1, 2, 5, 3, 2];
console.log(LongestBitonicSequence(nums1)); // Output: 5

const nums2 = [1, 11, 2, 10, 4, 5, 2, 1];
console.log(LongestBitonicSequence(nums2)); // Output: 6
