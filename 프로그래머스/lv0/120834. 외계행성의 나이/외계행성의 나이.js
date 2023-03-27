function solution(age) {
    var answer = [];
    let alpha = "abcdefghij"
    let ages= String(age)
    for(let i=0; i<ages.length; i++){
        answer.push(alpha.charAt(ages[i]))
    }
    
    
    return answer.join('');
}