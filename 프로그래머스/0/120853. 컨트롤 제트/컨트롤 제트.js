function solution(s) {
    var answer = 0;
    let split = s.split(' ');
    for(let i = 0; i < split.length; i++){
        if(split[i] === 'Z'){
            answer -= Number(split[i - 1]);
        } else {
            answer += Number(split[i]);
        }
    }
    return answer;
}