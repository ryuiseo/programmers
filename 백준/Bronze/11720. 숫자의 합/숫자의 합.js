let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line1 = Number[input[0]];
let line2 = input[1].split('').map(Number);

let sum = line2.reduce((a,b)=>(a+b));

console.log(sum);