let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;
console.log("bubble sort: ", bubbleSort(arr, n));

//TC: O(n2) SC: O(1)
function bubbleSort(arr, n) {
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortRecursion(arr, n) {
  if (n == 1) return;
  for (let j = 0; j <= n - 2; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  bubbleSortRecursion(arr, n - 1);
}
