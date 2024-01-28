function solution(phone_number) {
    var answer = '';
    let number = phone_number.slice(-4);
    for( let i = 0; i < phone_number.length - 4; i++){
        answer += "*";
    }
    return answer += number;
}