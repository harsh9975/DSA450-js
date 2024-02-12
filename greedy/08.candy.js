/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candies = new Array(ratings.length).fill(1);
  // STEP 1: Create an array to store the number of candies for each index and initialize it with 1.

  // STEP 2: First pass from left to right
  for (let i = 1; i < candies.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // STEP 3: Second pass from right to left
  for (let i = candies.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // STEP 4: Find the sum of candies required
  let ans = 0;
  for (let i = 0; i < candies.length; i++) {
    ans += candies[i];
  }

  return ans;
};
