function solution(a, b) {
    var answer = '';
    var answer2 = '';
    answer =Number(a.toString()+b.toString())
    answer2 = Number(b.toString()+a.toString())
    
    if(answer > answer2){
        return answer
    }else if(answer < answer2){
        return answer2
    }else {
        return answer
    }
    
    return answer;
}