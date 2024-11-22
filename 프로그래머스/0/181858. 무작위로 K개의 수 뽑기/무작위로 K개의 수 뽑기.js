function solution(arr, k) {
    var answer = [];
    const setArray = new Set([...arr]);
    const newArray = [...setArray];
    for(let i = 0; i < k; i++){
        if(i < newArray.length){
            if(newArray[i] !== null){
                answer.push(newArray[i]);
            }
        } else {
            answer.push(-1);
        }
    }
    
    
    
    return answer;
}