function solution(array) {
    var answer = 0;
    let string = String(array);
    for(let i = 0; i < string.length; i++){
        if(string[i] === '7'){
            answer++;   
        }
    }
    return answer;
}