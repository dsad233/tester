function solution(str1, str2) {
    var answer = 0;
    for(let i = 0; i < str1.length; i++){
        if(str2.includes(str1)){
            answer = 1;
        } else {
            answer = 0;
        }
    }
    return answer;
}