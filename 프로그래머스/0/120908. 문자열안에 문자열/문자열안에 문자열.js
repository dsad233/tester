function solution(str1, str2) {
    var answer = 0;
    for(let i = 0; i < str1.length; i++){
        if(str1.includes(str2)){
            return answer = 1;
    } else {
        return answer = 2;
    }
    }
    
    return answer;
}