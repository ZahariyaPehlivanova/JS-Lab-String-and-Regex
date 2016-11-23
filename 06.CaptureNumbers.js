function solve(array) {

    let result = [];
    let pattern = /[0-9]+/g;
    for(let i = 0;i < array.length;i++){
        let str = array[i];
        let match = str.match(pattern);
        if(match){
            for(let i of match){
                result.push(i);
            }
        }
    }
    console.log(result.join(' '));
}
solve(['The300',
        'What is that?',
        'I think it’s the 3rd movie.',
        'Lets watch it at 22:45'
]);