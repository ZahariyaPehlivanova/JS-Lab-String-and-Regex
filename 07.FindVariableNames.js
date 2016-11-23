function solve([str]) {

    let result = [];
    let regex = /_[a-zA-Z\d]+/g;
    let match;

    while (match = regex.exec(str)) {
       result.push(match[0].substr(1));
    }
    console.log(result.join(','));
}
solve(['The _id and _age variables are both integers.']);