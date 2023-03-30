function solution(numbers) {
    var answer = 0;
    const alp = ['zero','one','two','three','four','five','six','seven','eight','nine']
    alp.forEach((n,i)=>{
        numbers = numbers.split(n).join(i)
    })
    return Number(numbers);
}