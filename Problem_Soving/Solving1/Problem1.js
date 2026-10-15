// Problem 19: Implement Your Own map() Function

// Create a function that behaves like JavaScript's built-in map() method.

// Example:

const numbers = [1, 2, 3, 4];

function myMap(arr, callback) {
  // Your code here
  const result = [];
  for(let i=0; i<arr.length; i++)
  {
    let number = arr[i];
    result.push(callback(number))
  }
  return result;
}

const result = myMap(numbers, num => num * 2);

console.log(result);
// [2, 4, 6, 8]