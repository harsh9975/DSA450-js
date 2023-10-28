let str = "hello";
let ans = reverseOptimal(str);
console.log("ans: ", ans);

function reverseNaive(str) {
  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

function reverseBetter(str) {
  let char = str.split("");
  char.reverse();
  return char.join("");
}

function reverseOptimal(str) {
  let strArr = str.split("");
  let low = 0;
  let high = strArr.length;

  while (low < high) {
    [strArr[low], strArr[high]] = [strArr[high], strArr[low]];
    low++;
    high--;
  }
  return strArr.join("");
}
