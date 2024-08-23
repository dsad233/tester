function solution(my_string) {
    var answer = 0;
    const split = my_string.split(' ');
    let oneIndex = Number(split[0]);
    
    for(let i = 1; i <= split.length; i+=2){
        if(split[i] === '+'){
            oneIndex += Number(split[i + 1]);
        } else if(split[i] === '-'){
            oneIndex -= Number(split[i + 1]);
        }
    }
    
    answer = oneIndex;
    return answer;
}