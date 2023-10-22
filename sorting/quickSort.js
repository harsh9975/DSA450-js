const arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log("Before Using Quicksort: ", arr);
sortArray(arr);
console.log("After Quicksort: ", arr);

function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
}

function sortArray(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}
