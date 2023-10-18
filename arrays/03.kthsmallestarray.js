//naive approach
// let arr = [7, 10, 4, 3, 20, 15];
let arr = [7, 10, 4, 20, 15];
k = 4;
kthsmallest(arr);

function kthsmallest(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[k - 1]);
}
