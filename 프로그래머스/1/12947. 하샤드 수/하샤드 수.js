function solution(x) {
    var answer = true;
    let su = x.toString().split('');
    let num = 0;
    for(let i = 0; i < su.length; i++){
        num += parseInt(su[i]);
    }
    return answer = (x % num === 0) ? answer : false;
}