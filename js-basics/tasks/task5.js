// Task 5: Write a function getGrade(score) that returns "A", "B", "C", "D", "F" based on score.

// Create a function called 'getGrade' that takes one parameter (score)
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

module.exports = { getGrade };

