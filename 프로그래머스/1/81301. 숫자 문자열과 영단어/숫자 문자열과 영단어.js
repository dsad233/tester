function solution(s) {
    var answer = 0;
    const array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < array.length; i++){
        s = s.replace(new RegExp(array[i], "g"), i);
    }
    
    answer = Number(s);
    
    return answer;
}