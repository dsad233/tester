function solution(array) {
    var answer = [];
    var maX = Math.max(...array);
    let index = array.indexOf(maX);
    answer.push(maX, index);
    return answer;
}