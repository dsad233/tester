function solution(myString) {
    var answer = '';
    let small = myString.toLowerCase();
    for(let i = 0; i < small.length; i++){
        if(small[i] < 'l'){
            answer += small[i].replace(small[i], 'l');
        } else {
            answer += small[i];
        }
    }
    return answer;
}