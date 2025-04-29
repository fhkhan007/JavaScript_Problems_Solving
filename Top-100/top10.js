// 1.Factorial of a Number
// Write a function to compute the factorial of a number.

function fact(n) {

    if(n<0) return "Factorisl not defined for negative Numbers";

    if(n==1 || n==0) return 1;

    let num =1 ;
    for(let i=1; i<=n; i++){
        num = num * i ;
    }
    return num;
}

console.log(fact(5));