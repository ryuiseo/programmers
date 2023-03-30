function solution(array, n) {
    let min=0;
    let arr=[];
    array.sort((a,b)=>a-b).map((el,idx)=>{
        if(el<n) arr.push(n-el);
        else arr.push(el-n)
    })
    min = Math.min(...arr)
    return array[arr.indexOf(min)]
}