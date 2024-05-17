function solution(n) {
    var answer = 0;
    let string = n.toString().split('');
    for(let i = 0; i < string.length; i++){
        answer += Number(string[i]);
    }
    return answer;
}