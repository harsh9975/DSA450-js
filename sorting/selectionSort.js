let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;
console.log("selection sort: ", selectionSort(arr, n));

// TC: O(n2) SC: O(1)
function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
