function solution(my_string) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++){
        var numbertype = Number(my_string[i]);
            if(!isNaN(numbertype)){
                answer += numbertype;
        }
    }
    return answer;
}