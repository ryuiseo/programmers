function solution(arr) {
    var answer = [];
    for(const list of arr){
        if(list >= 50 && list %2===0){
           answer.push(list / 2)
        }else if(list < 50 && list %2 !==0){
            answer.push(list*2)
        } else {
            answer.push(list)
        }
    }
    return answer;
}