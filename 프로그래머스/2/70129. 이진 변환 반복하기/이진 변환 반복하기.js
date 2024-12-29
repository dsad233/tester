function solution(s) {
    var answer = [];
    let oneCount = 0;
    let twoCount = 0;
    
    while(s.length > 1){
        const sLength = s.length;
        const split = s.split('');
        let remove0 = '';
        for(let i = 0; i < split.length; i++){
            if(split[i] !== '0'){
                remove0 += split[i];
            }
        }
        oneCount++;
        twoCount += sLength - remove0.length;
        s = remove0.length.toString(2);
    }
    
    answer.push(oneCount, twoCount);
    
    return answer;
}