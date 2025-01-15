function solution(n) {
    var answer = 0;
    const binary = n / 2 + 1;
    
    for(let i = 1; i <= binary; i++){
        let totalCount = 0;
        for(let j  = i; j < binary; j++){
            totalCount += j;
            
            if(totalCount > n){
                break;
            } else if(totalCount === n){
                answer++;
                break;
            }
        }
    }
    
    answer = (n === 1) ? 1 : answer + 1;
    
    return answer;
}
