function solution(n, control) {
    var answer = 0;
    let string = control.toLowerCase();
    for( let i = 0; i < string.length; i++){
        if( string[i] === "w" ) {
            n += 1;
        } else if( string[i] === "s" ){
            n -= 1;
        } else if( string[i] === "d"){
            n += 10;
        } else if( string[i] === "a"){
            n -= 10;
        } else {
            n = -1;
            continue;
        }
    }
    return answer = n;
}