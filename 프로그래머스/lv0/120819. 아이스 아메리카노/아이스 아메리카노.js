function solution(money) {
    var answer = [];
    let americano= 5500;
    let first = Math.floor(money/americano);
    let last = money%americano
    answer.push(first, last)
    return answer;
}