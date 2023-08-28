function solution(my_string, alp) {
    var answer = '';
    for(const list of my_string){
        if(list === alp){
            answer += list.toUpperCase()
        }else {
            answer += list
        }
    }
    return answer;
}