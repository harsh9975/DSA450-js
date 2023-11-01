let k = 3;
generateAllStrings(k);

function generateAllStrings(k) {
  if (k <= 0) {
    return;
  }
  var str = new Array(k);
  str[0] = "0";
  generateAllStringsUtil(k, str, 1);

  str[0] = "1";
  generateAllStringsUtil(k, str, 1);
}

function generateAllStringsUtil(k, str, n) {
  if (n == k) {
    console.log(str.join("") + " ");
    return;
  }
  if (str[n - 1] === "1") {
    str[n] = "0";
    generateAllStringsUtil(k, str, n + 1);
  }

  if (str[n - 1] === "0") {
    str[n] = "0";
    generateAllStringsUtil(k, str, n + 1);
    str[n] = "1";
    generateAllStringsUtil(k, str, n + 1);
  }
}
