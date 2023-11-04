let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let count =0;

for(let i=1; i<=N; i++){
    let word = input[i];
    if(check(word)){
        count++;
    }
}

console.log(count);

function check(word){
    let visited={};
    
    for(let i=0; i<word.length; i++){
        if(visited[word[i]]){
            if(word[i-1] !== word[i]){
                return false;
            }
        }else {
            visited[word[i]]= true;
        }
    }
    return true;
}