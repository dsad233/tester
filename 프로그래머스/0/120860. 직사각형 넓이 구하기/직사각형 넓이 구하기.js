function solution(dots) {
    var answer = 0;
    const xArray = [];
    const yArray = [];
    
    for(let i = 0; i < dots.length; i++){
        xArray.push(dots[i][0]);
    }
    
    for(let j = 0; j < dots.length; j++){
        yArray.push(dots[j][1]);
    }
    
    const xSum = Math.max(...xArray) - Math.min(...xArray);
    const ySum = Math.max(...yArray) - Math.min(...yArray);
    
    answer = xSum * ySum;
    
    return answer;
}