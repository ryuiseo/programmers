function solution(arr, n) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 0) {
            // 배열의 길이가 짝수일 때, 홀수 인덱스에 n을 더합니다.
            if (i % 2 !== 0) {
                result.push(arr[i] + n);
            } else {
                result.push(arr[i]);
            }
        } else {
            // 배열의 길이가 홀수일 때, 짝수 인덱스에 n을 더합니다.
            if (i % 2 === 0) {
                result.push(arr[i] + n);
            } else {
                result.push(arr[i]);
            }
        }
    }

    return result;
}