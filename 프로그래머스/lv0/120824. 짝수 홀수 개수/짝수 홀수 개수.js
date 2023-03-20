function solution(num_list) {
    var answer = [];
    let a = 0;
    let b=0;
    for(var i=0; i<num_list.length; i++){
        if(num_list[i]%2===0){
            a +=1;
        }else {
            b +=1;
        }
    }
    answer.push(a,b)
    return answer;
}