function solution(s) {
    var answer = '';
    let split = s.split('');
    let sort = split.sort((a, b) => b.localeCompare(a));
    for(let i = 0; i < sort.length; i++){
        if(sort[i].toLowerCase() === sort[i]){
            answer += sort[i];
        }
    }
    
    for(let j = 0; j < sort.length; j++){
        if(sort[j].toUpperCase() === sort[j]){
            answer += sort[j];
        }
    }
    
    return answer;
}