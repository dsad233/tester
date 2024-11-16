function solution(numbers) {
    var answer = 0;
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    
    answer = result / numbers.length;
    return answer;
}