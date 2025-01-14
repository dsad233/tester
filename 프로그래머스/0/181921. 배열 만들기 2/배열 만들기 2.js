function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        let strings = String(i);
        if(/^[05]+$/.test(strings)){
            answer.push(i);
        }
    }
    
    if(answer.length === 0){
        answer.push(-1);
    }
    
    return answer;
}