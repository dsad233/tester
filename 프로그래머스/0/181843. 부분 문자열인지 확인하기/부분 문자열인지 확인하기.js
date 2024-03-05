function solution(my_string, target) {
    var answer = 0;
    let vi = my_string.toString();
    for( let i = 0; i < target.length; i++){
        if(vi.includes(target)){
        answer = 1;     
    }
    }
    
    return answer;
}