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

function getRegisterTotal(register) {
  let total = 0;

  for(var i = 0; i < register.length; i++) {
    total += register[i][1];
  }

  return Number(total.toFixed(2));
}

function invertArray(arr) {
  let result = [];

  for(var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

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
  let total = getRegisterTotal(cid);

  if(change > total) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if(total === change) {
    return {status: "CLOSED", change: cid};
  }

  let values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let coinsAndBills = [];

  for(var i = cid.length - 1; i >= 0; i--) {
    let current = [cid[i][0], 0.0];
    while(change >= values[i] && cid[i][1] >= values[i]) {
      current[1] += values[i];
      change -= values[i];
      cid[i][1] -= values[i];
    }

    coinsAndBills.push(current);
  }

  let result = [];

  for(var i = 0; i < coinsAndBills.length; i++) {
    if(coinsAndBills[i][1] !== 0) {
      result.push(coinsAndBills[i]);
    }
  }

  if(change === 0) {
    return {status: "OPEN", change: result};
  } else if (change < 0.01) {
    result[result.length - 1][1] += 0.01;
    return {status: "OPEN", change: result};
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }


}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01],
  ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
  ["FIVE", 55], ["TEN", 20], ["TWENTY", 61], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01],
  ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
  ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01],
  ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
  ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0],
  ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
  ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0],
  ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0],
  ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0],
  ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
  ["TWENTY", 0], ["ONE HUNDRED", 0]]));