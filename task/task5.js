//Task 5. Output a single-linked list in the reverse order
let printListBack = (list, sum = '') => list.next == null ? list.value : (sum += list.value + printList(list.next)).split('').reverse().join('') ;
/*

function printListBack(list, sum = '') {
  let step = list;
  while(step) {
    sum = step.value + sum;
    step = step.next;
  }
  return sum;
}
*/
//done 