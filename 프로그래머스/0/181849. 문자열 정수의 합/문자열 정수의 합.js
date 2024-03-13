function solution(num_str) {
    var answer = 0;
    let string = num_str.split('');
    
    for(let i = 0; i < num_str.length; i++){
        answer += Number(string[i]);
    }
    return answer;
}