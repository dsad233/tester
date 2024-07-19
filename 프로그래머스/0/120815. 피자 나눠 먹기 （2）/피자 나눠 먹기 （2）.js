function solution(n) {
    var answer = 0;
    let count = 0;
    
    while(true){
        count++;
        if((count * 6) % n === 0){
            break;
        }
    }
    
    answer = count;
    return answer;
}