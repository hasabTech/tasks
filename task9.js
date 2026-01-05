// Task 9: Write a function findMax(arr) that returns the largest number.

function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let num of arr) if (num > max) max = num;
  return max;
}
module.exports = { findMax };

