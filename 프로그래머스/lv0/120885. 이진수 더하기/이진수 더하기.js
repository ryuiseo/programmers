function solution(bin1, bin2) {
    let answer = BigInt('0b' + bin1) + BigInt('0b' + bin2);

    return answer.toString(2);
}