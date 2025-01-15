function solution(n) {
    var answer = 0;
    const bounry = n / 2 + 1;
    
    for(let i = 1; i < bounry; i++){
        let totalCount = 0;
        for(let j  = i; j < bounry; j++){
            totalCount += j;
            
            if(totalCount > n){
                break;
            } else if(totalCount === n){
                answer++;
                break;
            }
        }
    }
    
    return (n === 1) ? 1 : answer + 1;
}