function rob(nums) {
  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // Helper function to calculate the maximum amount without robbing adjacent houses
  const simpleRob = (start, end) => {
    let prevMax = 0;
    let currMax = 0;

    for (let i = start; i <= end; i++) {
      const temp = currMax;
      currMax = Math.max(currMax, prevMax + nums[i]);
      prevMax = temp;
    }

    return currMax;
  };

  // Calculate the maximum amount either by robbing the first house or the last house
  const max1 = simpleRob(0, n - 2); // Rob the first house, not the last one
  const max2 = simpleRob(1, n - 1); // Rob the last house, not the first one

  // Choose the maximum amount from the two cases
  return Math.max(max1, max2);
}
