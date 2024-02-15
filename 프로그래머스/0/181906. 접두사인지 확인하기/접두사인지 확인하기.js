function solution(my_string, is_prefix) {
    var answer = 0;
    let my = my_string.toLowerCase();
    let is = is_prefix.toLowerCase();
    if(my.startsWith(is)){
        return answer = 1;
    }
    return answer;
}