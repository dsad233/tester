function solution(s){
    var answer = true;
    let num = 0;
    s = s.toUpperCase();
    for(let i = 0; i < s.length; i++){
        if(s[i] === "P") num ++;
        if(s[i] === "Y") num --;
    }
    answer = num === 0 ? true : false;
    return answer;
}