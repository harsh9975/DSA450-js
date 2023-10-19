//bruteforce iterate and check TC 0(n2)
//better approach use map and store freq tc:0(n) sc: 0(n)
//optimal approach linked list tortoise method

let arr = [1, 3, 4, 2, 3];
console.log("duplicate no.: ", findDuplicate(arr));

function findDuplicate(arr) {
  let slow = arr[0];
  let fast = arr[0];
  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow != fast);

  fast = arr[0];
  while (slow != fast) {
    slow = arr[slow];
    fast = arr[fast];
  }
  return slow;
}
