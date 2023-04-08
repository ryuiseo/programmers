function solution(dots) {

    let x1 =dots[0][0]
    let x2 =dots[1][0]
    let x3 =dots[2][0]
    let x4 =dots[3][0]
    
    let y1 =dots[0][1]
    let y2 =dots[1][1]
    let y3 =dots[2][1]
    let y4 =dots[3][1]
    
    let answer1 = Math.max(x1,x2,x3,x4)-Math.min(x1,x2,x3,x4)
    let answer2 = Math.max(y1,y2,y3,y4)-Math.min(y1,y2,y3,y4)
    
    return answer1*answer2;
}