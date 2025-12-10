// Task 7: Write a function sumArray(arr) that returns the sum of all numbers in an array.

// TODO: Create a function called 'sumArray' that takes one parameter (arr)
// TODO: Use a loop to iterate through the array and sum all numbers
// TODO: Return the total sum

// function sumArray(arr) {
//   // Your code here using a for loop or for...of loop
// }

// TODO: Export the sumArray function


function sumArray(arr) {
   
    if (!arr || arr.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    
    return sum;
}

module.exports = { sumArray };