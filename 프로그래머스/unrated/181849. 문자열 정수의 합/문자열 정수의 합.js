function solution(num_str) {
    let a = [...num_str].reduce((a,b)=>a+Number(b),0)
    return a

}