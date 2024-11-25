function solution(s) {
    var answer = '';
    const split = s.split(' ');
    const array = [];

    for(let i = 0; i < split.length; i++){
        array.push(Number(split[i]));
    }

    const min = Math.min(...array);
    const max = Math.max(...array);
    
    answer += min + " " + max;

    return answer;
}