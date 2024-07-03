function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++){
        const [a, b] = queries[i];
        
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        answer = arr;
    }
    return answer;
}