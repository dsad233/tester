function solution(chicken) {
    var answer = 0;
    let coupons = chicken;
    
    while(coupons >= 10){
        let service = Math.floor(coupons / 10);
        answer += service;
        coupons = Math.floor(coupons % 10) + service;
    }
    
    return answer;
}