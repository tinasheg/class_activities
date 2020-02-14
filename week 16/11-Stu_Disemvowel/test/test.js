var expect = require("chai").expect;
var disemvowel = require("../disemvowel.js");


describe("Disemvowel", function() {
  it("should remove all vowels from lowercase strings", function() {
    expect(disemvowel("this is a test string")).to.equal("ths s  tst strng");
  });

  it("should remove all vowels from UPPERCASE strings", function() {
    expect(disemvowel("THIS IS A TEST STRING")).to.equal("THS S  TST STRNG");
  }); 

  it("should remove all vowels from mixed strings", function() {
    expect(disemvowel("This iS a test string 123")).to.equal("Ths S  tst strng 123");
  });

//   it("should throw when an empty string is passed", function() {
//     expect(function() {
//       disemvowel('');
//     }).to.throw(Error);
//   });
});
