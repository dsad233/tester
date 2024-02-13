function solution(num_list) {
    var answer = [];
    let min = num_list.sort((a, b) => a - b);
    answer = min.slice(0, 5);
    return answer;
}