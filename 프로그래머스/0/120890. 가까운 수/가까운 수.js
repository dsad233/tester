function solution(array, n) {
    var answer = 0;
    let number = [];
    for(let i = 0; i < array.length; i++){
        number.push(Math.abs(array[i] - n));
    }
    
    let min = Math.min(...number);
    
    let saveArr = [];
    for(let j = 0; j < number.length; j++){
        if(number[j] === min){
            saveArr.push(array[j]);
        }
    }
    
    answer = Math.min(...saveArr);
    
    return answer;
}