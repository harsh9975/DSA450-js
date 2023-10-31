function intersectionPresentNaive(head1, head2) {
  while (head2 != null) {
    let temp = head1;
    while (temp != null) {
      if ((temp = head2)) {
        return head2;
      }
      temp = temp.next;
    }
    head2 = head2.next;
  }
}

function intersectionPresentBetter(head1, head2) {
  let set = new Set();
  while (head1 != null) {
    set.add(head1);
    head1 = head1.next;
  }
  while (head2 != null) {
    if (set.has(head2)) {
      return head2;
    }
    head2 = head2.next;
  }
  return null;
}

function intersectionPresentOptimak(head1, head2) {
  let d1 = head1;
  let d2 = head2;

  while (d1 != d2) {
    d1 = d1 == null ? head1 : d1.next;
    d2 = d2 == null ? head2 : d2.next;
  }
  return d1;
}
