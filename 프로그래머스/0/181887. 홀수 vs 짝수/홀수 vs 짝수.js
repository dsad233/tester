function solution(num_list) {
    var answer = 0;
    let right = 0;
    for(let i = 0; i < num_list.length; i++){
        if(i % 2 === 1){
            answer += num_list[i];
        } else {
            right += num_list[i];
        }
    }
    return answer = answer >= right ? answer : right;
}