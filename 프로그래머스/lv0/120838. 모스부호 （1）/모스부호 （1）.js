function solution(letter) {
    var answer = '';
    let morse ={".-":"a",
              "-...":'b',
              "-.-.":'c',
              "-..":'d',
              ".":'e',
              "..-.":'f',
              "--.":'g',
              "....":'h',
              "..":'i',
              ".---":'j',
              "-.-":'k',
              ".-..":'l',
              "--":'m',
              "-.":'n',
              "---":'o',
              ".--.":'p',
              "--.-":'q',
              ".-.":'r',
              "...":'s',
              "-":'t',
              "..-":'u',
              "...-":'v',
              ".--":'w',
              "-..-":'x',
              "-.--":'y',
              "--..":'z'}
   answer=letter.split(" ").map(e=>morse[e]).join('')
    
    
    return answer;
}