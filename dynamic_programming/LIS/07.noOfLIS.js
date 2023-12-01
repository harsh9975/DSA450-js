function findNumberOfLIS(nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  const lengths = new Array(n).fill(1);
  const counts = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (lengths[i] <= lengths[j]) {
          lengths[i] = lengths[j] + 1;
          counts[i] = counts[j];
        } else if (lengths[i] === lengths[j] + 1) {
          counts[i] += counts[j];
        }
      }
    }
  }

  let maxLength = 1;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (lengths[i] > maxLength) {
      maxLength = lengths[i];
      result = counts[i];
    } else if (lengths[i] === maxLength) {
      result += counts[i];
    }
  }

  return result;
}

// Example usage:
const nums1 = [1, 3, 5, 4, 7];
console.log(findNumberOfLIS(nums1)); // Output: 2

const nums2 = [2, 2, 2, 2, 2];
console.log(findNumberOfLIS(nums2)); // Output: 5
