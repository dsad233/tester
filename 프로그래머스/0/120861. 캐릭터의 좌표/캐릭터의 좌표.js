function solution(keyinput, board) {
    var answer = [];
    const leftright = Math.floor(board[0] / 2);
    const updown = Math.floor(board[1] / 2);
    let updowncount = 0;
    let leftrightcount = 0;
        
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] === "left" && Math.abs(leftrightcount - 1) <= leftright){
            leftrightcount--;
        } else if (keyinput[i] === "right" && leftrightcount + 1 <= leftright){
            leftrightcount++;
        } else if (keyinput[i] === "up" && updowncount + 1 <= updown){
            updowncount++;
        } else if(keyinput[i] === "down" && Math.abs(updowncount - 1) <= updown){
            updowncount--;
        }
    }
    
    // console.log("leftright : ", leftright)
    // console.log("updown : ", updown)
    // console.log("leftrightcount : ", leftrightcount)
    // console.log("updowncount : ",updowncount)
    
    answer.push(leftrightcount, updowncount);
    
    return answer;
}