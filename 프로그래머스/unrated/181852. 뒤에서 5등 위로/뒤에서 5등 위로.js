function solution(num_list) {
    var answer = [];
    answer = num_list.sort((a,b)=>a-b);
    return answer.slice(5);
}