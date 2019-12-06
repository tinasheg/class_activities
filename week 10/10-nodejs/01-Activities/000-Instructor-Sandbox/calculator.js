let operatorObj = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
    remainder: "%",
    exp: '**',
    algebra: "algebra",
}

let operation = operatorObj[process.argv[2]];

if (operation === "algebra") {
    newAlgebra = (process.argv[3]).split(/x|=|\+/);
    console.log((newAlgebra[3] - newAlgebra[2]) / newAlgebra[0]);
} else {
    console.log(eval((process.argv[3]) + operation + process.argv[4]));
}