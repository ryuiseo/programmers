function solution(my_strings, parts) {
   const answer=[];
    for(let i=0; i<my_strings.length; i++){
        const [start, end] = parts[i];
        const str = my_strings[i];
        
        const partStr = str.substring(start, end+1);
        answer.push(partStr);
    }
    return answer.join('')
}