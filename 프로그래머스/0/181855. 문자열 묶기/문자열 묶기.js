function solution(strArr) {
    var answer = 0;
    let count = {};
    for(let key of strArr){
        let length = key.length;
        if(!count[length]){
            count[length] = 0;
        }
        count[length]++;
    }
    
    let max = Math.max(...Object.values(count));
    answer = max;
    
    return answer;
}