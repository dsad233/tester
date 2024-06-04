function solution(before, after) {
    var answer = 0;
    let beforesplit = before.split('');
    let aftersplit = after.split('');
    let beforechange = beforesplit.sort((a, b) => a.localeCompare(b)).join('');
    let afterchange = aftersplit.sort((a, b) => a.localeCompare(b)).join('');
    if(beforechange === afterchange){
        return answer = 1;
    } else {
        return answer = 0;
    }
}