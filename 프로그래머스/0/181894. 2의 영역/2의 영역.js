function solution(arr) {
    var answer = [];
    let firstindex = arr.indexOf(2);
    let lastindex = arr.lastIndexOf(2);
    
    let slice = arr.slice(firstindex, lastindex + 1);
    
    if(slice.length === 0){
        answer.push(-1);
    } else {
        answer = slice;
    }

    return answer;
}