function solution(date1, date2) {
    var answer = 0;
    let year1 = date1[0];
    let month1 = date1[1];
    let day1 = date1[2];
    let year2 = date2[0];
    let month2 = date2[1];
    let day2 = date2[2];
    
    if(year1 < year2){
        answer = 1;
    } else if(year1 > year2){
        answer = 0;
    } else if(month1 < month2){
        answer = 1;
    } else if(month1 > month2){
        answer = 0;
    } else if(day1 < day2){
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}