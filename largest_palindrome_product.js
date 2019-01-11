/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */

// product of the largest 2 by 2 factors is 99 x 99 = 9801
module.exports = function (digits) {
  let factor_0 = 0;
  let factor_1 = 0;
  let palindromeNumber = 0;
  let bounds = Math.pow(10, digits);

  for (let x = 1; x < bounds; x++) {
    factor_0 = x;
    for (let y = 1; y < bounds; y++) {
      const product = x * y;
      const reverseProduct = product
        .toString()
        .split('')
        .reverse()
        .join('');

      factor_1 = y;
      if (product.toString() === reverseProduct) {
        if (palindromeNumber < product) {
          palindromeNumber = product;
        }
      }      
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
