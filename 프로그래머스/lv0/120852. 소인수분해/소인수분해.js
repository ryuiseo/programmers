function solution(n) {
    var answer = [];
    let div = 2;
    
    while(n>=2){
        if(n%div ===0){
            answer.push(div)
            n /=div
        }else {
            div++
        }
    }
    return Array.from(new Set(answer));
}
