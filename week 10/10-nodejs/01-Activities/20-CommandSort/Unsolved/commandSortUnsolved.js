// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

let numbers = process.argv.slice(2);

console.log(numbers);
console.log(numbers.sort(function(a,b) {return Number(a)-Number(b)}));
