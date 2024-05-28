function solution(money) {
    var answer = [];
    let defaults = 5500;
    let count = Math.floor(money / defaults);
    let countmoney = money - (count * defaults);
    answer.push(count, Math.abs(countmoney));
    return answer;
}
