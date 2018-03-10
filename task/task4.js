//Task 4. Output a single-linked list
//let printList = list => list.next == null ? String(list.value) : list.value + printList(list.next)

function printList(list, sum = '') {
  let step = list;
  while(step) {
    sum += step.value;
    step = step.next;
  }
  return sum;
}
//done 