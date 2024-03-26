function solution(n_str) {
    var answer = '';
    for(let i = 0; i < n_str.length; i++){
        if(n_str[i] === '0'){
            answer += i;
            continue;
        }
        return answer = n_str.substr(i);
    }
}