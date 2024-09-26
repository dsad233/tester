function solution(s) {
    var answer = '';
    let upString = '';
    const split = s.split('').sort((a, b) => b.localeCompare(a));
    
    for(let i = 0; i < split.length; i++){
        if(split[i].toUpperCase() !== split[i]){
            answer += split[i];
        } else {
            upString += split[i];
        }
    }
    
    answer += upString;
    
    return answer;
}