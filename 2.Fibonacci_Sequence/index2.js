// Recursive Factorial 

function Rec_Factorial(n) {

    if (n === 0) {
        return 1
    }
    return n* Rec_Factorial(n-1)
}

console.log(Rec_Factorial(5));