let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line = input[0].split(' ');

let a = line[0];
let b =line[1];

let sa = a[2]+a[1]+a[0]
let sb = b[2]+b[1]+b[0]

console.log(Math.max(Number(sa), Number(sb)))