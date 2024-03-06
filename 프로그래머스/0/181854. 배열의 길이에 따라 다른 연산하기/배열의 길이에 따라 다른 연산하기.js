function solution(arr, n) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        if( arr.length % 2 === 1){
            answer.push(i % 2 === 0 ? arr[i] + n : arr[i]);
        } else if (arr.length % 2 === 0){
            answer.push(i % 2 === 1 ? arr[i] + n : arr[i]);
        }
    }
    return answer;
}