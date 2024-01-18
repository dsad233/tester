function solution(n) {
    var answer = 0;
    let x = Math.sqrt(n);
    if( Number.isInteger(x) ){
        answer = Math.pow(Math.floor(x) + 1, 2);
    } else{
        answer = -1;
    }
    return answer;
}