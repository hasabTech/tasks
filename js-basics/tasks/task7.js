// Task 7: Write a function sumArray(arr) that returns the sum of all numbers in an array.
function sumArray(arr) {
  let total = 0;

  for (let num of arr) {
    total += num;
  }

  return total;
}
module.exports = { sumArray };
