function solution(i, j, k) {
    var answer = [];
    let final =0;
    for(let a=i; a<=j; a++){
        answer.push(a)
    }
    let arr2 = String(answer).split("")
   
    for(let i=0; i<arr2.length; i++){
        if(arr2[i]===String(k)){
            final +=1
        }
    }
    return final;
}