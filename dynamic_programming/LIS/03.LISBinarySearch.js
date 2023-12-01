var lengthOfLIS = function (arr) {
  const n = arr.length;

  // Create an empty array 'temp' to store the increasing subsequence
  const temp = [arr[0]];

  // Initialize the length of the longest increasing subsequence
  let len = 1;

  // Iterate through the input array starting from the second element
  for (let i = 1; i < n; i++) {
    if (arr[i] > temp[temp.length - 1]) {
      // If arr[i] is greater than the last element of 'temp', it extends the subsequence
      temp.push(arr[i]);
      len++;
    } else {
      // If not, we find the index where arr[i] can replace an element in 'temp'
      const ind = temp.findIndex((el) => el >= arr[i]);
      temp[ind] = arr[i];
    }
  }

  // 'len' now represents the length of the longest increasing subsequence
  return len;
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
