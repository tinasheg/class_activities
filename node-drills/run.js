const data = require('./bands')

if (process.argv[2]) {
    console.log("A " + process.argv[2] + " band is " + data.bands[process.argv[2]]);
} else {
    for (const key in data.bands) {
        if (data.bands.hasOwnProperty(key)) {
            console.log("A " + key + " band is " + data.bands[key]); 
        }
    }
}

