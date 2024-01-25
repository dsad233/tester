function solution(n, k) {
    var answer = 0;
    let a = n * 12000 + k * 2000 - Math.floor(n/10) * 2000;
    console.log(Math.floor(n / 10));
    return answer += a;
}
