/**
 * caesarCipher.js
 *
 * Takes a string and encrypts/decrypts it using a rotation-13 based
 * Caesar Cipher
 *
 * @author Chris Wolf
 * @version December 11, 2018
 * chriswolfdesign@gmail.com
 */

/**
 * Takes a string and encrypts/decrypts it using a rotation-13 based
 * Caesar Cipher
 *
 * @param {string} str -- the original string to be encrypted/decrypted
 *
 * @return {string} the string after it has been encrypted/decrypted
 */
function rot13(str) { // LBH QVQ VG!
  let result = "";

  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= "A".charCodeAt(0) && str.charCodeAt(i) <=
      "Z".charCodeAt(0)) {
      result += String.fromCharCode("A".charCodeAt(0) + (str.charCodeAt(i) - "A".charCodeAt(0) + 13) % 26);
    } else {
      result += str[i];
    }
  }
  return result;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
