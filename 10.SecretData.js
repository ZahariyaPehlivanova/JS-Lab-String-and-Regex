function solve(array) {
    let namePattern = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let phonePattern = /\+[\d\-]{10}(?=\s|$)/g;
    let idPattern = /![a-zA-Z\d]+(?=\s|$)/g;
    let basesPattern = /_[a-zA-Z\d]+(?=\s|$)/g;

        for(let i = 0;i < array.length;i++){
            let matchName = array[i].match(namePattern);
            let matchPhone = array[i].match(phonePattern);
            let matchId = array[i].match(idPattern);
            let matchBase = array[i].match(basesPattern);
            if(matchName){
                for(let m of matchName){
                    let len = m.length;
                    array[i]=array[i].replace(m,'|'.repeat(len));
                }
            }
            if(matchPhone){
                for(let m of matchPhone){
                    let len = m.length;
                    array[i]=array[i].replace(m,'|'.repeat(len));
                }
            }
            if(matchId){
                for(let m of matchId){
                    let len = m.length;
                    array[i]=array[i].replace(m,'|'.repeat(len));
                }
            }
            if(matchBase){

                for(let m of matchBase){
                    let len = m.length;
                    array[i]=array[i].replace(m,'|'.repeat(len));
                }
            }
        }
    console.log(array.join('\n'));
}
solve(['Agent *Ivankov was  *Ivankov had to act quick in order.  it was +555-49-796 subject !2491a23BVB34Q and returning to Base _Aurora21'
]);
