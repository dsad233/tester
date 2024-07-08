function solution(arr) {
    var answer = 0;
    while(true){
        let array = [...arr];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 50 && arr[i] % 2 === 0){
                arr[i] /= 2;
            } else if(arr[i] < 50 && arr[i] % 2 === 1){
                arr[i] = (arr[i] * 2) + 1;
            }
        }
        
        if(array.toString() === arr.toString()){
            break;
        }
            
        answer++;
    }
    return answer;
}