function solution(sides) {
    var answer = 0;
    let sort = sides.sort((a, b) => a - b);
    let max = sides[2];
    let a = sides[0];
    let b = sides[1];
    let sum = a + b;
    if(max < sum){
        return answer = 1;
    } else {
     return answer = 2;   
    }
}