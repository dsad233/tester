function solution(n) {
    var answer = '';
    const formation = n.toString(3);
    
    for(let i = formation.length - 1; i >= 0; i--){
        answer += formation[i];
    }
    
    return parseInt(answer, 3);
}