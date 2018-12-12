/**
 * romanNumeralConverter.js
 *
 * A function that will take in an int and convert it to its' Roman Numeral
 * value.
 *
 * @author Chris Wolf
 * @version December 11, 2018
 * chriswolfdesign@gmail.com
 */

/**
 * Takes in an int and returns its' Roman Numeral representation
 *
 * @param {int} num -- the original number we would like to converted to
 *                     Roman Numeral
 *
 * @return {string} the Roman Numeral representation of num
 */
function convertToRoman(num) {
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V",
    "IV", "I"];
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  whileloop:
  while(num > 0) {
    for(var i = 0; i < romans.length; i++) {
      if(num >= decimals[i]) {
        result += romans[i];
        num -= decimals[i];
        continue whileloop;
      }
    }
  }

  return result;
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(36));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
