function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++){
        const [a, b, c] = queries[i];
        
        
        for(let j = a; j <= b; j++){
            if(j % c === 0){
                arr[j] += 1;
            }
        }
    }
    
    answer = arr;
    
    return answer;
}