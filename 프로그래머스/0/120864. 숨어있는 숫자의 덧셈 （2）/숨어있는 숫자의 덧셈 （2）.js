function solution(my_string) {
    var answer = 0;
    let result = '';
    for(let i = 0; i < my_string.length; i++){
        if(!isNaN(my_string[i])){
            result += my_string[i];
        } else if(result !== ''){
            answer += Number(result);
            result = '';
        }
    }
    
    if(typeof result === 'string'){
        answer += Number(result);
    }
    
    return answer;
}