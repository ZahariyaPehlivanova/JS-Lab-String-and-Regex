function solve([str,word]) {

    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    let count = (str.match(regex) || []).length;
    console.log(count);

}
solve(['There _id and  _age variables the both integers.','the']);