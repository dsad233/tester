function solution(num_list) {
    var answer = 0;
    let n = 1;
    
    for(let i = 0; i < num_list.length; i++){
        n *= num_list[i];
        answer += num_list[i];
    }
    
    if( n < Math.pow(answer, 2)){
        return 1;
    } else{
        return 0;
    }
    
}