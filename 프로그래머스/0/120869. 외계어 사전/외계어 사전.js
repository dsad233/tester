function solution(spell, dic) {
    var answer = 2;
    const spellSort = spell.sort((a, b) => a.localeCompare(b)).join('');
    const newMap = dic.map((data) => data.split('').sort((a, b) => a.localeCompare(b)).join(''));
    
    for(let i = 0; i < newMap.length; i++){
        if(spellSort === newMap[i]){
            answer = 1;
        }
    }
    
    return answer;
}
