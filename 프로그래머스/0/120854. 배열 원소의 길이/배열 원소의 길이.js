function solution(strlist) {
    var answer = [];
    let numbe = strlist;
    for(let i = 0; i < strlist.length; i++){
        answer.push(strlist[i].length);
    }
    return answer;
}