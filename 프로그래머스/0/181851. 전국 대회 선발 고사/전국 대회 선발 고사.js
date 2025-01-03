function solution(rank, attendance) {
    var answer = 0;
    const saveArray = [];
    
    for(let i = 0; i < rank.length; i++){
        const array = [];
        array.push(rank[i], i);
        saveArray.push(array);
    }
    
    const filter = saveArray.filter((_, i) => attendance[i] === true);
    filter.sort((a, b) => a[0] - b[0]);
    
    const newResultArray = [];
    for(let k = 0; k < filter.length; k++){
        newResultArray.push(filter[k][1]);
    }
    
    const [a, b, c] = newResultArray
    answer = (10000 * a) + (100 * b) + c;
    
    return answer;
}