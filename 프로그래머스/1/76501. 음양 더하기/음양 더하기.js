function solution(absolutes, signs) {
    var answer = 0;
    
    console.log("absolutes : ",absolutes);
    console.log("signs : ", signs);
    
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i]){
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    
    return answer;
}