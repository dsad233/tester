function solution(str_list) {
    var answer = [];
    
    let lindex = str_list.indexOf('l');
    let rindex = str_list.indexOf('r');
    let leftslice = str_list.slice(0, lindex);
    let rightslice = str_list.slice(rindex + 1);
    
    if(lindex === -1 && rindex === -1){
        answer;
    } 
    
    if(lindex !== -1 && lindex < rindex){
        answer = leftslice;
    } else if(rindex !== -1){
        answer = rightslice;
    } else if(lindex !== -1){
        answer = leftslice;
    }
    
    
    return answer;
}