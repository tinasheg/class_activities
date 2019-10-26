let letters = [];
let word = 'race';

let reversWord = '';

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
    reversWord += letters.pop();   
}

let check = (word === reversWord) ? 'palindrome' : 'not!'

console.log(check)