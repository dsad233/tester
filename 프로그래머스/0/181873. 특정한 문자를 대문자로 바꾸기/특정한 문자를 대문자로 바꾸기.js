function solution(my_string, alp) {
    var answer = '';
    let string = my_string.toLowerCase();
    for(let i = 0; i < my_string.length; i++){
        if(string[i] === alp){
            answer += alp.toUpperCase();
        } else {
            answer += string[i];
        }
    }
    return answer;
}