function solution(numbers, direction) {
    var answer = [];
    let left = numbers[0];
    let right = numbers[numbers.length - 1];
    for(let i = 0; i < numbers.length; i++){
        
        if(direction === 'right'){
            numbers.pop();
            answer.push(right, ...numbers);
            break;
        } 
        
        if(direction === 'left'){
            numbers.shift();
            answer.push(...numbers, left);
            break;
        }
    }
    
    return answer;
}