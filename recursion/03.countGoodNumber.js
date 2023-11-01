function countGoodDigitStrings(N) {
  let count = 0;

  function isGoodDigitString(s) {
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0 && +s[i] % 2 !== 0) return false;
      if (i % 2 === 1 && ![2, 3, 5, 7].includes(+s[i])) return false;
    }
    return true;
  }

  for (let num = 0; num < Math.pow(10, N); num++) {
    if (isGoodDigitString(num.toString().padStart(N, "0"))) {
      count++;
    }
  }

  return count % (10 ** 9 + 7);
}

const MOD = 10 ** 9 + 7;
countGoodDigitStringsOptimal(50);
console.log(MOD);
function countGoodDigitStringsOptimal(N) {
  let count = 1;
  if (N % 2 == 0) {
    count *= modPow(4, Math.floor(N / 2));
    count *= modPow(5, Math.floor(N / 2));
    count %= MOD;
  } else {
    count *= modPow(4, Math.floor(N / 2));
    count *= modPow(5, Math.floor((N + 1) / 2));
    count %= MOD;
  }

  console.log("count: ", count);
}

function modPow(base, exponent) {
  if (exponent == 0) return 1;
  let result = 1;
  base = base % MOD;
  while (exponent > 0) {
    if (exponent % 2 == 1) {
      result = (result * base) % MOD;
    }
    base = (base * base) % MOD;
    exponent = Math.floor(exponent / 2);
  }
  return result % MOD;
}
