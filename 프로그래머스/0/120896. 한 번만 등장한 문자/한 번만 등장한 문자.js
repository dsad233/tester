function solution(s) {
    var answer = '';
    let count = {};
    
    for(let i = 0; i < s.length; i++){
        if(count[s[i]]){
            count[s[i]] ++;
        } else {
            count[s[i]] = 1;
        }
    }
    
    for(let value in count){
        if(count[value] === 1){
            answer += value;
        }
    }
    
    return answer = answer.split('').sort((a, b) => a.localeCompare(b)).join('');
}