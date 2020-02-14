var calculateTax = function(price) {
  // Fill in code here
  if (typeof price === "number") {
    //var totalPrice = price * 1.08
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price * 1.08)
  } else {
   return "Input must be a valid number"
  }
};

module.exports = calculateTax;
 console.log(calculateTax(5))