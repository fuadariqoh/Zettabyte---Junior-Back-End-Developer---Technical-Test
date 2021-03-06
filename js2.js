/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9];

function result(originalData, numbersOne, numbersTwo) {
  // Your Code Here
  let combined = numbersOne.concat(numbersTwo);
  let filteredArray = [];
  let deletedData = [];
  for (let i = 1; i < combined.length; i++) {
    if (filteredArray.indexOf(combined[i]) == -1) {
      filteredArray.push(combined[i]);
    } else {
      deletedData.push(combined[i]);
    }
  }
  let sumOfFilteredArray = 0;
  for (let i = 0; i < filteredArray.length; i++) {
    sumOfFilteredArray += filteredArray[i];
  }
  let sumOfDeleted = 0;
  for (let i = 0; i < deletedData.length; i++) {
    sumOfDeleted += deletedData[i];
  }
  return sumOfFilteredArray / sumOfDeleted;
}

console.log(result(originalData, numbersOne, numbersTwo));
