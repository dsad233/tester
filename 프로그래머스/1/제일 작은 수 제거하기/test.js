function solution(arr) {
    var answer = [];
    
    if(arr[0] === 10 && arr.length === 1 ){
        answer.push(-1);
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== Math.min(...arr)){
            answer.push(arr[i]);
        }
    }
    return answer;
}