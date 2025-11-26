// Task 9: Write a function findMax(arr) that returns the largest number.

function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  return Math.max(...arr);
}

module.exports = { findMax };
