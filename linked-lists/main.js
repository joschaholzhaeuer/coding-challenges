// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Output: [7,0,8]

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

function addTwoNumbers(l1, l2) {
  // reverse lists
  const reversedL1 = l1.reverse();
  const reversedL2 = l2.reverse();

  // turn arrays into numbers
  const numberL1 = parseInt(reversedL1.reduce((prev, cur) => prev.toString() + cur.toString()));
  const numberL2 = parseInt(reversedL2.reduce((prev, cur) => prev.toString() + cur.toString()));

  // add sum and save result
  const resultNumber = numberL1 + numberL2;

  // turn result into array, convert strings back to numbers and reverse
  const resultArray = Array
    .from(resultNumber.toString())
    .map(item => parseInt(item))
    .reverse();

  // return final result
  return resultArray;
}

console.log(addTwoNumbers(l1, l2));
