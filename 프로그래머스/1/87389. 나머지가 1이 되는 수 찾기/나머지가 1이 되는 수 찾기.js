function solution(n) {
    var answer = 0;
    for(answer; ; answer++){
        if(n % answer === 1){
            return answer;
        }
    }
}