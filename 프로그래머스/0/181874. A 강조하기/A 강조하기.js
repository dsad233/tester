function solution(myString) {
    var answer = '';
    let string = myString.toLowerCase();
    for(let i = 0; i < string.length; i++){
        if(string[i] === 'a'){
            answer += 'A';
        } else {
            answer += string[i];
        }
    }
    return answer;
}