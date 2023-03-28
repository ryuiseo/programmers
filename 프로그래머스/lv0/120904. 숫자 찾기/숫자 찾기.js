function solution(num, k) {
    let answer= 
       [...num+''].indexOf(k+'') !== -1 ? [...num+''].indexOf(k+'')+1 : -1
return answer
}