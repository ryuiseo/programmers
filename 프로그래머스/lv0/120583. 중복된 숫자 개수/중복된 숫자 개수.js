function solution(array, n) {
    var answer = 0;
    array.forEach((ele)=>{
        if(ele==n){
            answer +=1;
        }
    })
    return answer;
}