function solution(i, j, k) {
    var answer = 0;
    let result = [];
    for(let key = i; key <= j; key++){
        result.push(String(key));
    }
    
    for(let r = 0; r < result.length; r++){
        for(let g = 0; g < result[r].length; g++){
            if(result[r][g] === String(k)){
                answer++;
            }
        }
    }
    
    
    return answer;
}