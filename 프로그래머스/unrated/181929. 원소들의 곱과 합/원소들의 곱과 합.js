function solution(num_list) {
    var answer = 0;
    var multi = 0;
    var plus =0;
    var sumSquared = 0;
    multi = num_list.reduce((acc,num)=>acc*num,1);
    plus = num_list.reduce((acc,num)=>acc+num,0);
    sumSquared = plus*plus;
    if(multi<sumSquared){
        answer=1;
    }else{
        answer=0;
    }
    return answer;
}