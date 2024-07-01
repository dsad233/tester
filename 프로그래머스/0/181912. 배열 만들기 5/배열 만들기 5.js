function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0; i < intStrs.length; i++){
        let substr = intStrs[i].substr(s, l);
        let number = Number(substr);
        
        if(number > k){
            answer.push(number);
        }
    }
    return answer;
}