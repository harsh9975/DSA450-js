let s = "AABABBA",
  k = 1;
console.log(characterReplacement(s, k));

function characterReplacement(s, k) {
  let n = s.length;
  let charCount = new Array(26).fill(0);
  let maxCount = 0;
  let maxLen = 0;
  let left = 0;
  let right = 0;

  while (right < n) {
    const charIndex = s.charCodeAt(right) - "A".charCodeAt(0);
    charCount[charIndex]++;
    maxCount = Math.max(maxCount, charCount[charIndex]);
    if (right - left + 1 - maxCount > k) {
      let leftIndex = s.charCodeAt(left) - "A".charCodeAt(0);
      charCount[leftIndex]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
}
