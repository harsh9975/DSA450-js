// Find the maximum,second Max and minimum,second Min element in an array
const arr = [1, 2, 4, 6, 7, 5];
getMinMax(arr);
console.log("arr", arr);

function getMinMax(arr) {
  let n = arr.length;
  secondLargest(arr);
  secondSmallest(arr);
}

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] >= secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  console.log("largest", largest);
  console.log("second largest", secondLargest);
}

function secondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] <= secondSmallest && arr[i] != smallest) {
      secondSmallest = arr[i];
    }
  }
  console.log("smallest", smallest);
  console.log("second smallest", secondSmallest);
}
