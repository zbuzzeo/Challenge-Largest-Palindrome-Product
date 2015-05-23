var chai = require('chai');
var expect = chai.expect;
var findPalindromeProduct = require("../largest_palindrome_product.js");

describe("The Largest Palindrome Product", function () {
  it("of two 2 digit numbers should be 9009, 91 x 99", function () {
    var result = findPalindromeProduct(1,2);

    expect(result.palindromeNumber).to.equal(9009);

    // make sure solution contains the two factors
    expect([91, 99]).to.include(result.factor_0);
    expect([91, 99]).to.include(result.factor_1);
  });

  it("of two 3 digit numbers should be 906609", function () {
    var product = findPalindromeProduct(1,3);

    expect(product.palindromeNumber).to.equal(906609);

    // add your tests here
    //
    //
  });
  it('should only accept Numbers as arugments', function () {

  });
});