let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
function lengthOfLongestSubstring(s) {
  let n = s.length;
  let left = 0;
  let right = 0;
  let charSet = new Set();
  let maxLen = 0;

  while (right < n) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }
  return maxLen;
}
