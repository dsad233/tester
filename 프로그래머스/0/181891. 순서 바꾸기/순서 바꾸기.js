function solution(num_list, n) {
    var answer = [];
    let left = num_list.slice(0, n);
    let right = num_list.slice(n);
    answer = right.concat(left)
    return answer;
}