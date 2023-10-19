let arr = [1, 5, 7, 1],
  k = 6;
let n = arr.length;
console.log("no of pairs with sum", k, " :", countPairsOptimal(arr, n, k));

//TC: O(n2) SC: O(1)
function countPairsNaive(arr, n, k) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (arr[i] + arr[j] == k) {
        count++;
      }
    }
  }
  return count;
}

function countPairsOptimal(arr, n, k) {
  let count = 0;
  const freqMap = new Map();

  for (let i = 0; i < n; i++) {
    const required = k - arr[i];

    if (freqMap.has(required)) {
      count += freqMap.get(required);
    }

    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
  }
  return count;
}
