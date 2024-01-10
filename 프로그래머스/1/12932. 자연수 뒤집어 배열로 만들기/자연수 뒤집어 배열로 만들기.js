function solution(n) {
    var answer = [];
    let su = n.toString();
    for(let i = su.length - 1; i >= 0; i--){
        answer.push(Number(su[i]));
    }
    return answer;
}