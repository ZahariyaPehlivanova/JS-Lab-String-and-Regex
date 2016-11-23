function solve([str]) {
    str = str.split(' ');

    let result = [];
    for(let i = 0;i < str.length;i++){
        let curr = '';
        curr += str[i].substring(0,1).toUpperCase();
         curr += str[i].substring(1,str[i].length).toLowerCase();
        result.push(curr);
    }
    console.log(result.join(' '));
}
solve(['Capitalize these words']);