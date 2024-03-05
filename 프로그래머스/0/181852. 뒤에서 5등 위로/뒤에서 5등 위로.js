function solution(num_list) {
    var answer = [];
    num_list.sort((a, b) => b - a);
    for(let i = num_list.length - 6; i >= 0; i--){
        answer.push(num_list[i]);
    }
    return answer;
}