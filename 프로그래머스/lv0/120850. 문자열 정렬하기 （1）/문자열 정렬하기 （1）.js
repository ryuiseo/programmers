function solution(my_string) {
    var answer = [];
    let arr = my_string.split("")
    for(let i=0; i<arr.length; i++){
        if(arr[i]==Number(arr[i])){
            answer.push(Number(arr[i]))
        }
    }
    answer.sort((a,b)=>a-b)
    return answer;
}