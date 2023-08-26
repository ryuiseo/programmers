function solution(num_list) {
    let oddDigits ='';
    let evenDigits ='';
    let answer =0;
    for(const num of num_list){
        if(num %2 ===1){
            oddDigits += num.toString();
        }else {
            evenDigits += num.toString();
        }
    }
    answer = Number(oddDigits) + Number(evenDigits)
    return answer;
}