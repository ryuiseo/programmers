function solution(myString, pat) {
    var answer = '';
    for(let i=0; i<myString.length; i++){
        if(myString[i]==="A"){
            answer += "B";
        }else if(myString[i]==="B"){
            answer += "A"
        }else {
            answer += myString[i]
        }
    }
    if(answer.includes(pat)){
        return 1;
    }else {
        return 0;
    }

}