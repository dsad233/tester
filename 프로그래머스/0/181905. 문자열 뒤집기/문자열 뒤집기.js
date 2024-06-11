function solution(my_string, s, e) {
    var answer = '';
    let split = my_string.split('');
    let reverse = split.slice(s, e + 1).reverse().join('');
    let start = my_string.slice(0, s);
    let end = my_string.slice(e + 1);
    answer = start + reverse + end;
    return answer;
}