function solution(s) {
    var answer = ""; 
    let su = s.toString();
    if(su.length >= 1 || su.length <= 5 ){
         if(su[0] === '0'){
        answer = Number(su.substr(1));
         }else{
             answer = Number(su);
         }
    }
    return answer;
}
