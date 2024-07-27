function solution(hp) {
    var answer = 0;
    
    let kingAnt = 5;
    let soliderAnt = 3;
    let workerAnt = 1;
    
    let kingAttack = Math.floor(hp / kingAnt);
    let soliderAttack = Math.floor((hp - kingAttack * kingAnt) / 3 );
    let wokerAttack = Math.floor(hp - (kingAttack * kingAnt) - (soliderAttack * soliderAnt));
    
    answer = kingAttack + soliderAttack + wokerAttack;
    return answer;
}