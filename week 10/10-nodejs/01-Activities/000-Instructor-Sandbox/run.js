var data = require("./food");
console.log('data', data);

for(const property in data.foods) {
    console.log('my favorite ' + property + ` is ${data.foods[property]}`);
}