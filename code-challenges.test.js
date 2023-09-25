// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe('shuffleItems', () => {
  it("removes the first item from the array and shuffles the remaining items.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): 
    const firstExpectedAnswer = ["yellow", "blue", "pink", "green"]

    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    const secondExpectedAnswer = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
    expect(shuffleItems(colors1)).toEqual(expect.arrayContaining(firstExpectedAnswer))
    expect(shuffleItems(colors2)).toEqual(expect.arrayContaining(secondExpectedAnswer))
  })
})

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.


const shuffleItems = arr => {
  
    if (arr.length > 1) {
 
        arr.shift();

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    return arr; 
};




// Pseudo code:
/*
input: two arrays of string elements. 
output:  he shuffleItems function you provided shuffles the elements of an array in place using the Fisher-Yates shuffle algorithm, but with the first element removed before shuffling. 
process: A conditional alongside the a built in array method shift(), will be used to gather the first element in the array. Afterwards, 
a for loop will be used to start from the last element in the array and go backwards to the second element. Inside this loop, it generates a random index of j between 0 and i (inclusive) and swaps the elements at indices i and j using destructuring assignment. 
The function will check if the input array has a length greater than one, if there is only one element or none at all, the 

*/
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("countVotes", () => {
  it(" contains up votes and down votes and returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(countVotes(votes1)).toEqual(11)
    expect(countVotes(votes2)).toEqual(-31)
  })
})


// b) Create the function that makes the test pass.
const countVotes = (obj) => {
  if(obj.upVotes > obj.downVotes) {
      return obj.upVotes - obj.downVotes;
  } else 
      return -(obj.downVotes - obj.upVotes);
  }
// Pseudo code:
/*
input: two sepearted objects that have two key value pairs of increasing and decreasing points
output:the function calculates the vote count by subtracting the number of downvotes from the number of upvotes. If the number of upvotes is greater than the number of downvotes, it returns a positive number representing the postive votes. If the number of downvotes is greater, it returns a negative number representing the negative number of votes. 
process: This will be done using a conditional statement followed by arithmetic operators. 
*/
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("removeDuplicates", () => {
  it("two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(removeDuplicates(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})


// b) Create the function that makes the test pass.
function removeDuplicates (arrayOne, arrayTwo){

  const merged = [...arrayOne, ...arrayTwo]
  const excludeDuplicates = [...new Set(merged)]
  return excludeDuplicates
}

// Pseudo code:
/*
function: removeDuplicates arrow function
input: two arrays that hold various string elements
output: The function will return arrays that contain the same amount of elements from the first and second array. These merges arrays will
  remove duplicate values they carry with each other.
process: The function will use the spread operator (...) to combine the elements of both arrays into one. 
A new array called will be created and it will use the Set object to automatically remove any duplicate elements from the merged array. 
The Set method is a JavaScript data structure that only stores unique values. By spreading the Set back into an array, you get an array with duplicate elements removed.
*/
