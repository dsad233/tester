function solution(arr) {
    var answer = [];
    let log = Math.pow(2, Math.ceil(Math.log2(arr.length)));
    for(let i = 0; i < log; i++){
        if(!arr[i]){
            answer.push(0);
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}