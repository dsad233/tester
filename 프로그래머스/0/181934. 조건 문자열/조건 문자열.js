function solution(ineq, eq, n, m) {
    var answer = 0;
    let sign = ineq + eq;
    if(sign === "<="){
        answer = n <= m ? 1 : 0;
    } else if(sign === ">="){
        answer = n >= m ? 1 : 0;
    } else if (sign === ">!"){
        answer = n > m ? 1 : 0;
    } else if(sign === "<!"){
        answer = n < m ? 1 : 0;
    }

    
    return answer;
}