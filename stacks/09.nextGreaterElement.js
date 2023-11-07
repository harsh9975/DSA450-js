const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
const result = nextGreaterElement(nums1, nums2);

console.log(nextGreaterElement(nums1, nums2));
function nextGreaterElement(nums1, nums2) {
  const nextGreater = new Map();
  const stack = [];
  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      nextGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }
  const result = [];
  for (const num1 of nums1) {
    result.push(nextGreater.has(num1) ? nextGreater.get(num1) : -1);
  }
  return result;
}
