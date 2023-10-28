let S = "abba";
function isPalindrome(S) {
  let left = 0;
  let right = S.length - 1;
  let temp = S;

  while (left < right) {
    if (S[left] !== S[right]) {
      return 0; // Not a palindrome
    }
    left++;
    right--;
  }

  return 1;
}
