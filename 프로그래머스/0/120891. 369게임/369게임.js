function solution(order) {
    var answer = 0;
    let string = String(order);
    let split = string.split('');
    for(let i = 0; i < split.length; i++){
        if(['3', '6', '9'].includes(split[i])){
            answer++;
            continue;
        }
    }
    return answer;
}