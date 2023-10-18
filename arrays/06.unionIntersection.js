let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

// let union = findUnionintersectionMap(arr1, arr2);
let union = findUnionAndIntersectionOptimal(arr1, arr2);

//naive approach==> Using Map  Time Compleixty : O( (m+n)log(m+n) ) Space Complexity : O(m+n)
function findUnionintersectionMap(arr1, arr2) {
  let freq = new Map();
  let union = [];
  let intersection = [];

  for (let num of arr1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let num of arr2) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let [num, count] of freq) {
    union.push(num);
    if (count >= 2) {
      intersection.push(num);
    }
  }
  console.log("arr1", arr1);
  console.log("arr2", arr2);
  console.log("union", union);
  console.log("intersection", intersection);
}

// better approach ==> using set
function findUnionintersectionSet(arr1, arr2) {
  let set = new Set();
  let union = [];
  let intersection = [];

  for (let num of arr1) {
    set.add(num);
  }
  for (let num of arr2) {
    set.add(num);
  }

  for (let num of set) {
    union.push(num);
    // if (count >= 2) {
    //   intersection.push(num);
    // }
  }
  console.log("arr1", arr1);
  console.log("arr2", arr2);
  console.log("union", union);
  //   console.log("intersection", intersection);
}

function findUnionAndIntersectionOptimal(arr1, arr2) {
  const map = new Map();

  // Count elements in arr1
  for (const item of arr1) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  // Union and intersection
  const union = [...arr1];
  const intersection = [];

  for (const item of arr2) {
    if (map.has(item) && map.get(item) > 0) {
      map.set(item, map.get(item) - 1);
      intersection.push(item);
    } else {
      union.push(item);
    }
  }

  console.log("union", union);
  console.log("intersection", intersection);
}
