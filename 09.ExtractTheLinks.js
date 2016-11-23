function solve(array) {
    let pattern = /www\.[a-zA-Z\d\-]+(?:\.[a-z]+)+/g;

    let result = [];
    for(let i = 0;i < array.length;i++){
        let str = array[i];
        let match = str.match(pattern);
        if(match){
            for(let i of match){
                result.push(i);
            }
        }
    }
    console.log(result.join('\n'));
}
solve(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);
