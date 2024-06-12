function solution(order) {
    var answer = 0;
    
    // americano, anything = 4500;
    // cafelatteice = 5000;
    for(let i = 0; i < order.length; i++){
        if(order[i] === 'cafelatte' || order[i] === 'icecafelatte' || order[i] === 'cafelatteice' || order[i] === 'hotcafelatte' || order[i] === 'cafelattehot'){
        answer += 5000;
    }
    
    if(order[i] === 'americano' || order[i] === 'hotamericano' || order[i] === 'americanohot' || order[i] === 'iceamericano' || order[i] === 'americanoice' || order[i] === 'anything'){
        answer += 4500;
    }
        
    }
    
    return answer;
}