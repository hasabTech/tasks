// Task 10: Write a function countProperties(obj) that returns number of keys in an object.

// TODO: Create a function called 'countProperties' that takes one parameter (obj)
// TODO: Count and return the number of properties (keys) in the object
// TODO: You can use Object.keys() or iterate through the object

 function countProperties(obj) {
    let count = 0;
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
        count++;
        }
    }
    return count;
}

// TODO: Export the countProperties function
module.exports = {countProperties};