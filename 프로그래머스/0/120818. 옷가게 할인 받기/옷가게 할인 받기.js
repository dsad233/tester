function solution(price) {
    var answer = 0;
    
    if(price >= 500000){
        return answer = Math.floor(price - (price * 0.2));
    } else if(price >= 300000 && price < 500000){
        return answer = Math.floor(price - (price * 0.1));
    } else if(price >= 100000 && price < 300000){
        return answer = Math.floor(price - (price * 0.05));
    }  else {
        return answer = price;
    }
}