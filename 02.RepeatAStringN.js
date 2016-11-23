function solve([str,n]) {

    n = Number(n);
    let result = "";
    for(let i = 0;i < n; i++){
        result+=str;
    }
    console.log(result);
    
   // console.log(str.repeat(n));
}
solve(['repeat', '5']);