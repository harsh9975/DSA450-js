let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;
console.log("insertion sort: ", insertionSort(arr, n));

function insertionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

function insertionSortRecursion(arr, i, n) {
  if (i == n) return;
  let i = j;
  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j - 1];
    arr[j - 1] = arr[j];
    arr[j] = temp;
    j--;
  }
  insertionSortRecursion(arr, i - 1, n);
}
