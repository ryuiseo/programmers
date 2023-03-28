function solution(my_string) {

    let arr = Array.from(my_string);
    let answer = arr.filter((element,index)=>arr.indexOf(element)===index)
    return answer.join('');
}