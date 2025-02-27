function solution(n, m) {
    var answer = [];
    let gcd = 1;
    
    for(let i = 2; i <= Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    answer.push(gcd);
    
    if(!answer[0]){
        answer.push(1);
    }
    

    let lcm = 1;
    while(true){
        if(lcm % n === 0 && lcm % m === 0){
            break;
        }
        
        lcm++;
    }
    
    answer.push(lcm);
    
    return answer;
}