function solve(array) {

    let result = array[0].split(array[1]);
    for(let i = 0;i < result.length; i++){
        console.log(result[i]);
    }
}
solve(['One-Two-Three-Four-Five', '-']);