function solution(my_string) {
    var answer = [];
    let split = my_string.split('');
    for(let i = 0; i < split.length; i++){
        if(!isNaN(split[i])){
            answer.push(Number(split[i]));
        }
    }
    answer.sort((a, b) => a - b);
    
    return answer;
}