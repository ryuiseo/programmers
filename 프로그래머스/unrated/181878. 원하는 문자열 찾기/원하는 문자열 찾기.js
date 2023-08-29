function solution(myString, pat) {
    var answer = 0;
    let amy = myString.toUpperCase();
    let apat = pat.toUpperCase();
    if(amy.includes(apat)){
        answer = 1
    }else {
        answer =0;
    }
    return answer;
}