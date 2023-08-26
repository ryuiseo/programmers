function solution(num_list, n) {
    return num_list.slice(n - 1);
}

// 테스트
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 4;
const result = solution(num_list, n);
console.log(result); // [4, 5, 6, 7, 8, 9]
