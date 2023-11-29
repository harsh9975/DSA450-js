function maxRevenueMemo(N, price) {
  const memo = {};

  function cutRod(n) {
    if (n <= 0) {
      return 0;
    }

    if (n in memo) {
      return memo[n];
    }

    let maxRevenue = -1;

    for (let i = 1; i <= n; i++) {
      maxRevenue = Math.max(maxRevenue, price[i - 1] + cutRod(n - i));
    }

    memo[n] = maxRevenue;
    return maxRevenue;
  }

  return cutRod(N);
}

function maxRevenueTabulation(N, price) {
  const dp = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    let maxRevenue = -1;
    for (let j = 1; j <= i; j++) {
      maxRevenue = Math.max(maxRevenue, price[j - 1] + dp[i - j]);
    }
    dp[i] = maxRevenue;
  }

  return dp[N];
}

const N = 8;
const price = [3, 5, 8, 9, 10, 17, 17, 20];

console.log("memo: ", maxRevenueMemo(N, price));
console.log("memo: ", maxRevenueTabulation(N, price));
