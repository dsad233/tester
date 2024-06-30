const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    let [a, b] = input;
    console.log("a = " + a + "\n" + "b = " + b);
}).on('close', function () {
});