let nums = [1, 0, 1, 0, 1],
  goal = 2;

console.log(numSubarraysWithSum(nums, goal));
function numSubarraysWithSum(nums, goal) {
  const prefixSumCount = new Map();
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;
    if (sum === goal) {
      count++;
    }
    if (prefixSumCount.has(sum - goal)) {
      count += prefixSumCount.get(sum - goal);
    }

    prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);
  }
  return count;
}
