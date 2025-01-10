function solution(t, p) {
    var answer = 0;
    let count = 0;
    
    for(let i = 0; i < t.length; i++){
        const slice = t.slice(i, i + p.length);
        if(slice.length === p.length && slice <= p){
            count++;
        }
    }
    
    answer = count;
    
    return answer;
}