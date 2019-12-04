const fs = require('fs');

// fs.writeFile('movies.txt', 'gump', function(err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Created')
// });


fs.readFile('best_thing_ever.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data.split(', '))
})

