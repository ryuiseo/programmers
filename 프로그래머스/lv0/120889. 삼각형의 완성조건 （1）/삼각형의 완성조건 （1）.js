function solution(sides) {
    var answer = 0;
    let reverse = sides.sort((a,b)=>b-a);
    if(reverse[0]<reverse[1]+reverse[2]){
        answer =1;
    }else{
        answer =2;
    }
    return answer;
}