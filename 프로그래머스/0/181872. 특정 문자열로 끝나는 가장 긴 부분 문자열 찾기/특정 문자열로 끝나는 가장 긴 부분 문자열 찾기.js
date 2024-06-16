function solution(myString, pat) {
    var answer = '';
    let index = myString.lastIndexOf(pat);
    let slice = myString.slice(0,index);
    answer += slice + pat;
    return answer;
}