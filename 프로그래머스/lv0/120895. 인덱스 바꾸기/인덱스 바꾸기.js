function solution(my_string, num1, num2) {
    
    let arr = my_string.split('')
    let number1 = my_string[num1]
    let number2 = my_string[num2]
    
    arr[num1] = number2
    arr[num2] = number1
    return arr.join('');
}