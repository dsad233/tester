function solution(array) {
    var answer = 0;
    let sort = array.sort((a, b) => a - b);
    let listNumber = Math.floor(array.length / 2);
    
    answer = array[listNumber];
    return answer;
}