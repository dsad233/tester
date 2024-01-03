function solution(s){
    var answer = true;
    s = s.toUpperCase();
    let num = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "P") num ++;
        if(s[i] === "Y") num --;
    } if( num === 0 ){
        answer = true;
    } else{
        answer = false;
    }
    

    return answer;
}