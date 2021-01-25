// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const nums = [2, 7, 11, 15];
const target = 9;

function getResult(target, nums) {
  let result = [];

  // loop over nums and add up each number, comparing it to target
  nums.forEach((a, index1) => {
    if (result.length === 2) return;
    nums.forEach((b, index2) => {
      // if sum equals target return numbers, else resume looping
      if (a + b === target) {
        return result.push(
          { number: a, index: index1 },
          { number: b, index: index2 },
        );
      }
    });
  });
  return result;
}

console.table(getResult(target, nums));
