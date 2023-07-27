function solution(my_string) {
    var answer = [];
    let a = [];
    answer = my_string.split(" ");
    for(let i=0; i<answer.length; i++){
        if(answer[i] !==""){
            a.push(answer[i])
        }
    }
    return a;
}