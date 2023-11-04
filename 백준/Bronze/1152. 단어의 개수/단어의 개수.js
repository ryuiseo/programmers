let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].trim().split(' ');
if(line == ''){
    console.log(0)
}else{
    console.log(line.length)
}
