function solution(arr, idx) {
    var answer = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1 && i >= idx){
            answer = Math.min(i);
            break;
        } else {
            answer = -1;
        }
    }
    return answer;
}