function solution(my_string) {
    var answer = '';
    let split = my_string.toLowerCase().split('');
    for(let i = 0; i < split.length; i++){
        split.sort((a, b) => a.localeCompare(b));
        answer += split[i];
    }
    return answer;
}