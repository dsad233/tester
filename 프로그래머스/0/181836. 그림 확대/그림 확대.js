function solution(picture, k) {
    var answer = [];
    
    for(let i = 0; i < picture.length; i++){
        const array = [];
        for(let j = 0; j < picture[i].length; j++){
            const repeat = picture[i][j].repeat(k);
            array.push(repeat);
        }
        
        const joinArray = array.join('');
        for(let n = 0; n < k; n++){
            answer.push(joinArray);
        }
    }
    return answer;
}