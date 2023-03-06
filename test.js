/* In a language of your choice, using all best practice principles you’re aware of, 
could you please provide code that reads a list of 10 numbers ranging between 1 to 100.
Assuming there are 4 duplicates in the list of numbers, the output should remove the 
duplicates and sort the remaining numbers in descending order. Please state any assumptions you’ve made */

// My approach to this problem will be using a function which takes in an array of numbers as a parameter. I will break the task into 2 main chunks, the first being filtering out the duplicates, and then the second being sorting the array into a descending order.

// An assumption I am making is that an array can be accepted as a 'list'.

// Another assumption I am making is that the user will only use numbers as data types when making an array.

// I will first work on providing functionality to remove any duplicates from the list

function filterNums(arr) {
  let filteredArr = []; //here is where i will push unique values into

  for (let i = 0; i < arr.length; i++) {
    if (filteredArr.indexOf(arr[i]) === -1) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log(filterNums([1, 2, 3, 4, 5, 5, 6, 6, 7]));
