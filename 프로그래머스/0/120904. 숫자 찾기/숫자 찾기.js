function solution(num, k) {
    var answer = -1;
    let string = String(num).split('');
    for(let i = 0; i < string.length; i++){
        if(Number(string[i]) === k){
            answer = i + 1;
            break;
        }
    }
    return answer;
}