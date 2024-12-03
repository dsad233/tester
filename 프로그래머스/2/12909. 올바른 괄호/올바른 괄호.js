function solution(s){
    var answer = true;
    const array = [];
    
    for(let i = 0; i < s.length; i++){
        if(array[array.length - 1] === '(' && s[i] === ')'){
            array.pop();
        } else {
            array.push(s[i]);
        }
    }
    
    if(array && array.length !== 0){
        answer = false;
    }

    return answer;
}