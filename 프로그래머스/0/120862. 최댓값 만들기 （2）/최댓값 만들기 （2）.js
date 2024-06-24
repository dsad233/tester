function solution(numbers) {
    var answer = 0;
    let min1 = Math.min(...numbers);
    let indexOf1 = numbers.indexOf(min1);
    numbers.splice(indexOf1, 1);
    let min2 = Math.min(...numbers);
    
    numbers.splice(indexOf1, 0, min1)
    
    let max1 = Math.max(...numbers);
    let indexOf2 = numbers.indexOf(max1);
    numbers.splice(indexOf2, 1);
    let max2 = Math.max(...numbers);
    
    let mul1 = min1 * min2;
    let mul2 = max1 * max2;
    
    if(mul1 >= mul2){
        answer = mul1;
    }
    
    if(mul1 <= mul2){
        answer = mul2;
    } 
    
    return answer;
}