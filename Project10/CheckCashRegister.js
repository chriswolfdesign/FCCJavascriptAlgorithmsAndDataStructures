/*
 * CheckCashRegister.js
 *
 * A program to return change based on a user's purchase, payment, and
 * available change.
 *
 * @author Chris Wolf
 * @version December 15, 2018
 * chriswolfdesign@gmail.com
 */

/*
 * Takes in the user's payment, the price of the object, and our available
 * change to determine the change to be returned to user
 *
 * @param {Number} price -- the price of the item the user has purchased
 * @param {Number} cash -- the payment provided by the user
 * @parm {[[{String} coin : {Number} amount]] cind -- the coins we have in
 *                                                    our cash register
 */
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  // Here is your change, ma'am.
  return change;
}