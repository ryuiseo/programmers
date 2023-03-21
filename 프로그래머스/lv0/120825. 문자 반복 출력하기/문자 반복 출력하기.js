function solution(my_string, n) {
    var answer =[];
    let sp = my_string.split('');
    for(let i=0; i<sp.length; i++){
        answer.push(sp[i].repeat(n))
    }
    return answer.join('');
}