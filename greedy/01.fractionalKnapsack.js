function fractionalKnapsack(W, arr, n) {
  arr.sort((a, b) => b.value / b.weight - a.value / a.weight);
  let maxValue = 0;
  let fractions = [];

  for (let item of arr) {
    if (item.weight <= W) {
      maxValue += item.value;
      W -= item.weight;
      fractions.push({ item, fraction: 1 });
    } else {
      const fraction = W / item.weight;
      maxValue += item.value * fraction;
      fractions.push({ item, fraction });
      break;
    }
  }
  return maxValue;
}
