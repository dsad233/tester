function solution(left, right) {
    var answer = 0;
    let number = [];
    for(let i = left; i <= right; i++){
        number.push(i);
    }
    
    for(let j = 0; j < number.length; j++){
        let count = 0;
        for(let k = 1; k <= number[j]; k++){
            if(number[j] % k === 0){
                count++;
            }
        }
        if(count % 2 === 0){
            answer += number[j];
        } else if(count % 2 === 1) {
            answer -= number[j];
        }
    }
    
    return answer;
}