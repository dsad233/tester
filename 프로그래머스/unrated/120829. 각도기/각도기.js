function solution(angle) {
    let answer = 0;
    if(angle > 0 && angle < 90){
        console.log("예각");
        answer = 1;
    } else if(angle === 90){
        console.log("직각");
        answer = 2;
    } else if( angle > 90 && angle < 180){
        console.log("둔각");
        answer = 3;
    } else if( angle === 180){
        console.log("평각");
        answer = 4;
    }
    return answer;
}