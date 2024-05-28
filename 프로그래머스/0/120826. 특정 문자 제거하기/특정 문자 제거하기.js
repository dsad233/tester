function solution(my_string, letter) {
    var answer = '';
    let split = my_string.split('');
    for(let i = 0; i < my_string.length; i++){
        if(!my_string[i].includes(letter)){
        answer += my_string[i];
        }
    }
    return answer;
}