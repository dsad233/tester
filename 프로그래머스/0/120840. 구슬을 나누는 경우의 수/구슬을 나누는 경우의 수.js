function solution(balls, share) {
    var answer = 0;
    let pre = 1;
    let bot = 1;
    let botfectory = 1;
    
    for(let i = balls; i >= 1; i--){
        pre *= i;
    }
    
    for(let j = share; j >= 1; j--){
        bot *= j;
    }
    
    for(let k = 1; k <= balls - share; k++){
        botfectory *= k;
    }
    
    answer = Math.round(pre / (bot * botfectory));
    
    return answer;
}