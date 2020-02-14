var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;

console.log(disemvowel("This is a test string"));