function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++){
        const [a, b, c] = queries[i];
        let pices = Infinity;
        
        for(let j = a; j <= b; j++){
            if(arr[j] > c && arr[j] < pices){
                pices = arr[j];
            }
        }
        
        if(pices === Infinity){
            answer.push(-1);
        } else {
            answer.push(pices);
        }
    }
    return answer;
}