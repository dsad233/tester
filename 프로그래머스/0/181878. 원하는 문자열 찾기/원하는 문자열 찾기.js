function solution(myString, pat) {
    var answer = 0;
    let string = myString.toLowerCase();
    let pats = pat.toLowerCase();
    for(let i = 0; i <= string.length; i++){
        if(string.includes(pats)){
            return answer = 1;
        }
    }
    return answer;
}