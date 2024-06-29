function solution(myString, pat) {
    var answer = 0;
    let count = '';
    for(let i = 0; i < myString.length; i++){
        if(myString[i] === 'A'){
            count += 'B';
        } else {
            count += 'A';
        }
    }
    
    if(count.includes(pat)){
        answer = 1;
    }
    
    return answer;
}