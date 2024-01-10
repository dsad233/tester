function solution(n)
{
    var answer = 0;
    let su = n.toString();
    for(let i = 0; i < su.length; i++){
        answer += Number(su[i]);
    }
    
    return answer;
}