Array.prototype.myOwnFilter = function (callback) {
  let newArr = [];
  this.forEach((element, index) => {
    if (callback(element, index)) {
      newArr.push(element);
    }
  });
  return newArr;
};
let arr = [1, 3, 2, 4, 9, 5, 8, 6];

const arrFiltered = arr.myOwnFilter((element, index) => {
  return element > 4;
});

console.log(arrFiltered);
