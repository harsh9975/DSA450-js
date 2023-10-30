const LinkedList = require("./01.linked-list");

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(2);
list.add(1);
list.print();
console.log("Ans: ", isPalindrome(list.head));

function isPalindromeNaive(head) {
  let ans = [];
  while (head !== null) {
    ans.push(head.val);
    head = head.next;
  }
  let n = ans.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (ans[i] !== ans[n - 1 - i]) return false;
  }
  return true;
}

//TC: O(N/2)+O(N/2)+O(N/2)
function isPalindrome(head) {
  if (head == null || head.next == null) return true;
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverse(slow.next);
  slow = slow.next;
  let temp = head;
  while (slow != null) {
    if (temp.val != slow.val) return false;
    slow = slow.next;
    temp = temp.next;
  }
  return true;
}

function reverse(head) {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
