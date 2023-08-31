function solution(arr1, arr2) {
    var answer = 0;
    var plus = 0;
    if(arr1.length !== arr2.length){
        if(arr1.length-arr2.length>0){
            answer =1;
        }else {
            answer =-1;
        }
    }else {
       if(arr1.reduce((a,b)=>a+b,0) > arr2.reduce((a,b)=>a+b,0)){
           answer = 1;
       }else if(arr1.reduce((a,b)=>a+b,0) < arr2.reduce((a,b)=>a+b,0)){
          answer =-1;
       }else {
           answer = 0;
       }
    }
    
    return answer;
}