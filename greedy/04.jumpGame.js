// Approach 1: Greedy
// Time Complexity: O(n), where n is the length of the input array nums. This is because the algorithm iterates through the array only once.
// Space Complexity: O(1). The algorithm uses only a constant amount of extra space for variables like furthest, regardless of the size of the input array.
// Approach 2: Dynamic Programming
// Time Complexity: O(n^2), where n is the length of the input array nums. This is because the algorithm uses nested loops to iterate through the array and consider all possible jumps.
// Space Complexity: O(n). The algorithm uses an additional array dp of size n to store whether each index is reachable or not.
// Approach 3: Backtracking
// Time Complexity: Exponential. In the worst case, the backtracking approach can have a time complexity of O(2^n), where n is the length of the input array nums. This is because it explores all possible jumps recursively, leading to an exponential number of function calls.
// Space Complexity: O(n). The algorithm uses additional space for the recursion stack, which can grow up to the depth of the recursion, i.e., the maximum length of the input array.

function canJump(nums) {
  let furthest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > furthest) return false;
    furthest = Math.max(furthest, i + nums[i]);
  }
  return true;
}

function canJump(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(false);
  dp[0] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n - 1];
}

function canJump(nums) {
  const n = nums.length;
  const memo = new Array(n).fill(0);

  function canReachEnd(position) {
    if (position === n - 1) return true;
    if (memo[position] !== 0) return memo[position] === 1;

    const maxJump = Math.min(position + nums[position], n - 1);
    for (
      let nextPosition = position + 1;
      nextPosition <= maxJump;
      nextPosition++
    ) {
      if (canReachEnd(nextPosition)) {
        memo[position] = 1;
        return true;
      }
    }

    memo[position] = -1;
    return false;
  }

  return canReachEnd(0);
}

// Example usage:
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false
