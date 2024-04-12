function solution(arr) {
    var answer;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++ ){
            if(arr[i][j] !== arr[j][i]){
                return answer = 0;
            }
        }
    }
    return answer = 1;
}