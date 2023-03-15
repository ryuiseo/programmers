function solution(numbers) {
    const result = numbers.reduce(function add(sum,curr){
        return sum + curr
    },0)
    const average = result/numbers.length;
    return average;
}