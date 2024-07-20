function solution(letter) {
    var answer = '';
    let split = letter.split(' ');
    console.log(split)
    for(let i = 0; i < split.length; i++){
        if(split[i] === '.-'){
            answer += 'a';
        } else if(split[i] === '-...'){
            answer += 'b';
        } else if(split[i] === '-.-.'){
            answer += 'c';
        } else if(split[i] === '-..'){
            answer += 'd';
        } else if(split[i] === '.'){
            answer += 'e';
        } else if(split[i] === '..-.'){
            answer += 'f';
        } else if(split[i] === '--.'){
            answer += 'g';
        } else if(split[i] === '....'){
            answer += 'h';
        } else if(split[i] === '..'){
            answer += 'i';
        } else if(split[i] === '.---'){
            answer += 'j';
        } else if(split[i] === '-.-'){
            answer += 'k';
        } else if(split[i] === '.-..'){
            answer += 'l';
        } else if(split[i] === '--'){
            answer += 'm';
        } else if(split[i] === '-.'){
            answer += 'n';
        } else if(split[i] === '---'){
            answer += 'o';
        } else if(split[i] === '.--.'){
            answer += 'p';
        } else if(split[i] === '--.-'){
            answer += 'q';
        } else if(split[i] === '.-.'){
            answer += 'r';
        } else if(split[i] === '...'){
            answer += 's';
        } else if(split[i] === '-'){
            answer += 't';
        } else if(split[i] === '..-'){
            answer += 'u';
        } else if(split[i] === '...-'){
            answer += 'v';
        } else if(split[i] === '.--'){
            answer += 'w';
        } else if(split[i] === '-..-'){
            answer += 'x';
        } else if(split[i] === '-.--'){
            answer += 'y';
        } else if(split[i] === '--..'){
            answer += 'z';
        } 
    }
    return answer;
}