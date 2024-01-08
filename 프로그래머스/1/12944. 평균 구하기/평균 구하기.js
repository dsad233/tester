function solution(arr) {
    var answer = 0;
    let division;
    for(let i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    division = answer / arr.length;
    return division;
}