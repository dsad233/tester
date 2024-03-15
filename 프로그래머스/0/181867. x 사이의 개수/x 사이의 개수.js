function solution(myString) {
    var answer = [];
    let string = myString.split('x');
    for(const length of string){
        answer.push(length.length);
    }
    return answer;
}