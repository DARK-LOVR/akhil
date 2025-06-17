/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


function findLargestElement(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers");
    }

    let largest = numbers[0];
    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

module.exports = findLargestElement;
