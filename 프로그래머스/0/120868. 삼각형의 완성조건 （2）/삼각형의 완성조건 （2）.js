function solution(sides) {
    var answer = 0;
    const minNum = Math.min(...sides);
    const maxNum = Math.max(...sides);
    let save = [];
    
    let n = maxNum - minNum;
    let m = maxNum + minNum;
    
    for(let i = n; i < m; i++){
        save.push(i);
    }
    
    answer = save.length - 1;
    return answer;
}