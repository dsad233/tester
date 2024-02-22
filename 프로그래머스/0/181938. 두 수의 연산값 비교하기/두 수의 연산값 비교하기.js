function solution(a, b) {
    let able = parseInt( a.toString() + b.toString());
    let double = 2 * a * b;
    if( able >= double){
        return able;
    }else {
        return double;
    }
}
