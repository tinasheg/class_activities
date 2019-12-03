let a = Number(process.argv[3])
let b = Number(process.argv[4])
operator = process.argv[2]

if (operator === 'add') {
    return console.log(a + b)
}else if (operator === 'subtract') {
    return console.log(a - b)
}else if (operator === 'multiply') {
    return console.log(a * b)
}else if (operator === 'divide') {
    return console.log(a / b)
}else if (operator === 'remainder') {
    return console.log(a % b)
}else if (operator === 'exp') {
    return console.log(Math.pow(a, b))
}else {

}


