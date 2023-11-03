let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let min = Number(input[0].split(' ')[1]);
let time = Number(input[1]);

let totalMin = hour * 60 + min + time;
totalMin %= 1440;
let h1 = parseInt(totalMin / 60);
let m1 = totalMin % 60;

console.log(h1+" "+m1);