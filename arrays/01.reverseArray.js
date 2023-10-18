let arr = [1, 2, 3, 4, 5, 6];
console.log("before rev", arr);
reverseArray(arr);
console.log("after rev", arr);

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}
