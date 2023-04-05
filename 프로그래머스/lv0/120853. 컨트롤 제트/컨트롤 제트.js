function solution(s) {
    var answer;
    let arr = s.split(" ");
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]==="Z"){
            answer=arr.splice(i-1,2);
            i-=2;
        }else {
            answer =0;
        }
    }
    let sol= arr.filter(el=>el !== answer)
    return sol.reduce((acc,curr)=> acc+parseInt(curr),0);
}