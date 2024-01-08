function solution(s){
    var answer = true;
    s = s.toUpperCase();
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "P" ) sum++;
        if(s[i] === "Y") sum--;
    }
    answer = (sum === 0);

    return answer;
}