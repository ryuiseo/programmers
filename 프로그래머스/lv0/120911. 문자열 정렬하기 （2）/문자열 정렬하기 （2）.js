function solution(my_string) {
    var answer = '';
    let low = my_string.toLowerCase()
   
    return [...low].sort().join('');
}