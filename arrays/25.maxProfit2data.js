let price = [2, 30, 15, 10, 8, 25, 80];
let n = price.length;
console.log("Maximum Profit = ", maxProfitOptimal(price, n));

//Tc: O(2n)
function maxProfit(arr, n) {
  let profit = Array(n).fill(0);
  let maxPrice = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxPrice) {
      maxPrice = arr[i];
    }
    profit[i] = Math.max(profit[i + 1], maxPrice - arr[i]);
  }
  let minPrice = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < minPrice) minPrice = arr[i];

    profit[i] = Math.max(profit[i - 1], profit[i] + (arr[i] - minPrice));
  }
  let result = profit[n - 1];
  return result;
}

// TC: O(n)
function maxProfitOptimal(arr, n) {
  let first_buy = -Infinity;
  let first_sell = 0;
  let second_buy = -Infinity;
  let second_sell = 0;

  for (let i = 0; i < n; i++) {
    first_buy = Math.max(first_buy, -arr[i]);
    first_sell = Math.max(first_sell, first_buy + arr[i]);
    second_buy = Math.max(second_buy, first_sell - arr[i]);
    second_sell = Math.max(second_sell, second_buy + arr[i]);
  }
  return second_sell;
}
