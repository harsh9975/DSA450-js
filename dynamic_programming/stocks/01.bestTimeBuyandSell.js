var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    let cost = prices[i] - min;
    maxProfit = Math.max(maxProfit, cost);
    min = Math.min(min, prices[i]);
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
