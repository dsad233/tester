function solution(money) {
    var answer = [];
    let defaults = 5500;
    let count = Math.floor(money / defaults);
    let countmoney = count * defaults - money;
    answer.push(count, Math.abs(countmoney));
    return answer;
}