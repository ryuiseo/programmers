function solution(s) {
    let answer=[]
     s.split('').forEach((el)=>{
         if(s.indexOf(el)===s.lastIndexOf(el)){
             answer.push(el)
         }
     })
    

    
     return answer.sort().join('');
}