// Task 7: Write a function sumArray(arr) that returns the sum of all numbers in an array.

// TODO: Create a function called 'sumArray' that takes one parameter (arr)
function sumArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

module.exports = { sumArray };
