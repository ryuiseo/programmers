function solution(emergency) {
    var answer = [];
    let sor = [...emergency].sort((a,b)=>b-a)
    
    return emergency.map(v=>sor.indexOf(v)+1);
}