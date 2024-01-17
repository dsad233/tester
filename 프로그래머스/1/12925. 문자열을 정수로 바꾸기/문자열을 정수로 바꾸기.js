function solution(s) {
    var answer = 0;
    let su = s.toString();
    for( let i = 1; i <= su.length; i++){
        if(su.length >= 1 || su.length < 5){
            if(s[0] === 0){
                answer = Number(su.substr(1));
            }else{
            answer = Number(su);
        } 
        }
    }
    return answer;
}