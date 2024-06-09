function solution(a, b, c) {
    var answer = 0;
        if(a >= 1 && a <= 6 && b >= 1 && b <= 6 && c >= 1 && c <= 6){
            if(a !== b && a !== c && b !== c){
                answer = a + b + c;
            } 
            
            if(a === b || a === c || b === c){
                answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
            } 
            
            if(a === b && a === c && b === c){
                answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
            }
        }
    return answer;
}