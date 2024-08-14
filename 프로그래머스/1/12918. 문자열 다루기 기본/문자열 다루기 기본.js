function solution(s) {
    var answer = true;
    let split = s.split('');
    const result = [];
    
    if(s.length === 4 || s.length === 6){
        for(let i = 0; i < split.length; i++){
            if(!isNaN(split[i])){
                result.push(split[i]);
            }
        }
    }
    
    if(result.length !== s.length){
        answer = false;
    }
    
    
    
    return answer;
}