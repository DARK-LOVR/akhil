/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/




function isPalindrome(str) {
  const cleanedStr = str.toLowerCase(); // Convert to lowercase
  const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the string
  return cleanedStr === reversedStr; // Check if it's the same
}

module.exports = isPalindrome;
