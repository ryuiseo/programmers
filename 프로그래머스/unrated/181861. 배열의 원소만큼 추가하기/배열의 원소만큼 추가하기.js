function solution(arr) {
    var answer = [];
    for(const str of arr){
        for(let i=0; i<str; i++){
            answer.push(str)
        }
    }
    return answer;
}