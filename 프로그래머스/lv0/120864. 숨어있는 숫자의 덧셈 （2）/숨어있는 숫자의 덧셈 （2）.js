function solution(my_string) {
   
    let arr = [...my_string]
    let total =[]
    let t=''
    
    for(let i=0; i<arr.length; i++){
        if(!isNaN(Number(arr[i]))){
            t += arr[i]
            
            if(isNaN(Number(arr[i+1]))){
                total.push(t)
                t ='';
            }
        }
    }
    return total.reduce((a,b)=>a+Number(b),0);
}