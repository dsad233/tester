function solution(price, money, count) {
    var answer = 0;
    
    let totalMoney = 0;
    
    let i = 1;
    
        while(i <= count){
            totalMoney += price * i;
            i++;
        }
    
    if(totalMoney < money){
        answer = 0;
    } else {
        answer = Math.abs(totalMoney - money);
    }
     
    return answer;
}