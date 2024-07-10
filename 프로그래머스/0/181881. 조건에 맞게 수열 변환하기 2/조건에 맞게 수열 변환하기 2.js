function solution(arr) {
    var answer = 0;
    
    while(true){
        let array = [...arr];
        let count = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 50 && arr[i] % 2 === 0){
                arr[i] /= 2;
            } else if(arr[i] < 50 && arr[i] % 2 === 1){
                arr[i] = (arr[i] * 2) + 1; 
            }
        }
        count.push(arr);
    
        if(array.toString() === count.toString()){
            break;
        }
        answer++;
    }
    
    return answer;
}