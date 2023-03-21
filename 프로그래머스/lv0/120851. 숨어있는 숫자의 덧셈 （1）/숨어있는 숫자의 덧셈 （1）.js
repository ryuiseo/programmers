function solution(my_string) {
    var answer = 0;
    let arr = my_string.split("");
    for(let i=0; i<arr.length; i++){
        if(Number(arr[i])){
            answer += Number(arr[i])
        }
    }
    return answer;
}