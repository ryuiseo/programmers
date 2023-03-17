function solution(numbers) {
    var answer = 0;
   let reverse= numbers.sort((a,b)=>b-a);
    answer = reverse[0]*reverse[1]
    return answer;
}