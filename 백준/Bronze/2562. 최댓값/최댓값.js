let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(x => Number(x));
let max = Math.max(...data)
let maxIndex = data.indexOf(max)+1;

console.log(max);
console.log(maxIndex);