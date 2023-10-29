let s = "aabcb";
console.log(sumOfBeautiesNaive(s));

function sumOfBeautiesNaive(s) {
  let n = s.length;
  let beautySum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const substring = s.slice(i, j);
      beautySum += calculateBeauty(substring);
    }
  }
  return beautySum;
}

function calculateBeauty(substring) {
  const charCount = new Map();
  let maxCount = 0;
  let minCount = Number.MAX_VALUE;

  for (let i = 0; i < substring.length; i++) {
    const char = substring[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, charCount.get(char));
    minCount = Math.min(minCount, charCount.get(char));
  }
  return maxCount - minCount;
}

function sumOfBeautiesOptimal(s) {
  let beautySum = 0;
  let limit = s.length;

  for (let i = 0; i < limit; i++) {
    const freq = new Array(26).fill(0);
    for (let j = i; j < limit; j++) {
      freq[s.charCodeAt(j) - "a".charCodeAt(0)]++;
      beautySum += calculateBeautyFreq(freq);
    }
  }
  return beautySum;
}

function calculateBeautyFreq(freq) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < 26; i++) {
    if (!freq[i] == 0) {
      max = Math.max(max, freq[i]);
      min = Math.min(min, freq[i]);
    }
  }
  return max - min;
}
