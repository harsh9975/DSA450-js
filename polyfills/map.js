Array.prototype.myOwnMap = function (callback) {
  const newArr = [];

  this.forEach((element, index) => {
    const result = callback(element, index);
    newArr.push(result);
  });

  return newArr;
};

let arr = [1, 3, 2, 4, 9, 5, 8, 6];

const arr2 = arr.myOwnMap((element, index) => {
  return element * 5;
});

console.log(arr2);
