function solution(strArr) {
    var answer = 0;
    let count = {};
    
    for(let i = 0; i < strArr.length; i++){
        let length = strArr[i].length;
        if(!count[length]){
            count[length] = 0;
        }
        count[length]++;
    }
    
    let keys = Object.keys(count);
    let oneKeys = keys[0];
    
    for(let j = 0; j < keys.length; j++){  
        if(count[j] > count[oneKeys]){
            oneKeys = count[j];
        }
    }
    
    let maxValues = Math.max(...Object.values(count));
    
    if(oneKeys && maxValues){
        answer = maxValues;
    }

    return answer;
}