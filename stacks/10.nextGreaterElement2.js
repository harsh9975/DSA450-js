const nums1 = [1, 2, 1];
const result1 = nextGreaterElements(nums1);
console.log(result1);

function nextGreaterElements(nums) {
  let n = nums.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const num = nums[i % n];
    while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
      result[stack.pop()] = num;
    }
    if (i < n) {
      stack.push(i);
    }
  }
  return result;
}
