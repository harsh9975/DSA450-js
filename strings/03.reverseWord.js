let str = "this is an amazing program";
console.log(reverseWordsOptimal(str));

function reverseWordsBruteForce(str) {
  const words = str.split(" ");
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}

function reverseWordsOptimal(str) {
  let reversedWord = "";
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + " ";
      reversedWord = "";
    }
  }
  // Handle the last word
  reversedStr += reversedWord;
  return reversedStr;
}
