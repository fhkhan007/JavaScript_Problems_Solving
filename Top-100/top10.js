// 1.Factorial of a Number
// Write a function to compute the factorial of a number.

function fact(n) {
    let num =1 ;
    for(let i=1; i<=n; i++){
        num = num*i;
    }
    return num;
}

console.log(fact(5));