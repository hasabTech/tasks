// Task 11: Write a function getDayName(dayNumber) that returns "Monday", "Tuesday", etc.

// TODO: Create a function called 'getDayName' that takes one parameter (dayNumber)
// TODO: Use a switch statement to return the day name based on the number (1-7)
// TODO: 1 = "Monday", 2 = "Tuesday", ..., 7 = "Sunday"
// TODO: Return "Invalid day" for numbers outside 1-7

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;

    default:
      break;
  }
}

// TODO: Export the getDayName function
