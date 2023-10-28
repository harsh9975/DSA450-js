let num = "52";
console.log("largestOddNumber(num): ", largestOddNumber(num));
function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 == 1) {
      return num.substring(0, i + 1);
    }
  }
  return "";
}
