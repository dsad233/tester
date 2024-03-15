function solution(myString) {
    var answer = [];
    let string = myString.split('x');
    for(let i = 0; i < string.length; i++){
        answer.push(string[i].length);
    }
    return answer;
}