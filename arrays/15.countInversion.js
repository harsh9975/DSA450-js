const a = [5, 4, 3, 2, 1];
const cnt = numberOfInversionsOptimal(a);
console.log("The number of inversions is: " + cnt);

function numberOfInversionsNaive(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}

function mergeSort(arr, low, high) {
  let count = 0;
  if (low >= high) return count;
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);
  return count;
}

function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;
  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      count += mid - left + 1;
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return count;
}

function numberOfInversionsOptimal(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}
