function solution(numbers) {
    var answer = 0;
    let num = numbers.sort((a,b)=>a-b)
    answer = Math.max((num[0]*num[1]),(num[num.length-1]*num[num.length-2]))
    
    return answer;
}