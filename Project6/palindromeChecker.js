/**
 * palindromeChecker.js
 *
 * A function to read in a string and, ignoring case and special characters,
 * determines if the given string is a palindrome.
 *
 * @author Chris Wolf
 * @version December 11, 2018
 * chriswolfdesign@gmail.com
 */

/*
 * Takes in a string and, after ignoring case and special characters,
 * determines if the given string is a palindrome.
 *
 * @param {string} str -- the string we wish to determine whether or not it
 *                        is a palindrome
 *
 * @return {boolean} true if str is a palindrome, false otherwise
 */
function palindrome(str) {
  // Remove all non-alphabetic characters
  str = str.replace(/[\W]+/g, "");
  str = str.replace(/_/g, "");

  // Convert the entire string to lower case
  str = str.toLowerCase();

  if(str.length === 0 || str.length === 1) {
    return true;
  } else if(str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return palindrome(str.substring(1, str.length - 1));
  }

  return str;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("Not a palindrome"));
console.log(palindrome("A man, a plan, a canal, Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega yM"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
