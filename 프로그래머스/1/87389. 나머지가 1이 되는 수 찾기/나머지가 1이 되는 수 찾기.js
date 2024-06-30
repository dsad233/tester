function solution(n) {
    var answer = 0;
    let arr = [];
    for(let i = 1; i < n; i++){
        if(n % i === 1){
            arr.push(i);
        }
    }

    answer = Math.min(...arr);
    return answer;
}