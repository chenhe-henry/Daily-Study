// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
var mergeTwoLists = function (l1, l2) {
  let arrOne = l1.toString().split("->");
  let arrTwo = l2.toString().split("->");
  let result = arrOne.concat(arrTwo).sort().join("->");
  return result;
};
console.log(mergeTwoLists("1->2->4", "1->3->4"));
