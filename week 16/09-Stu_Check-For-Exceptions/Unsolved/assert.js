var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  try {
    func(x, y);
  } catch (error) {
    threw = true;
    console.log('we have an error', error)
  }
  // If an error is thrown, set threw to true


  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof y !== "number" || typeof x !== "number") {
    throw new Error('Both should be numbers!');// throw an error if either x or y is not a number
  }
  else return x * y;
};

console.log(assertThrows(multiply, 3,4));
console.log(assertThrows(multiply, '3',4));
console.log(assertThrows(multiply, 3,'4'));