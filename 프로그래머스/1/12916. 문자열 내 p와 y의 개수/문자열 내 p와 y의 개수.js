function solution(s){
    var answer = true;
    let Acount = 0;
    let Bcount = 0;
    const small = s.toLowerCase();
    for(let i = 0; i < small.length; i++){
        if(small[i] === 'p'){
            Acount++;
        } else if(small[i] === 'y'){
            Bcount++;
        }
    }
    
    if(Acount === Bcount){
        answer;
    } else {
        answer = false;
    }


    return answer;
}