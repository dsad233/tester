function solution(a, b) {
    var answer = 0;
    let num = 0;
    if(a === b){
        return a;
    }
    
    const [min, max] = [Math.min(a, b) , Math.max(a, b)];
    for(let i = min; i <= max; i++){
        num += i;
    }
    
    return answer = num;
}