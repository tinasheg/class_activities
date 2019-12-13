// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
const TV = require('./tv')
const tv = new TV();


let search = process.argv[2];
let term = process.argv.slice(3).join(' ');

if (!search) {
    search = 'show';
    term = 'Friends';
}
if (!term) {
    term = 'Adam Sandler'
}
if (search === 'show') {
    console.log('we are searching for a show');
    tv.findShow(term);
} else {
    console.log(`we are searching for an actor`);
}