function solution(my_strings, parts) {
    var answer = '';
    for(let i = 0; i < my_strings.length; i++){
        const [ start, end ] = parts[i];
        answer += my_strings[i].slice(start, end + 1);
    }
    return answer;
}