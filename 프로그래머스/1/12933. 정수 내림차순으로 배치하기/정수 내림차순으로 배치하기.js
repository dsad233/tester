function solution(n) {
    var answer = "";
    let su = n.toString().split('');
    let change = su.sort((a, b) => b - a).join('');
    answer += change;
    return Number(answer);
}