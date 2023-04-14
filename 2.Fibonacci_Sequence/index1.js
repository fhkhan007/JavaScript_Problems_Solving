// Recursive Fibonacci Sequence 

function RE_Fibonacci(n){
    if(n<2) {
        return n
    }

    return  RE_Fibonacci(n-1) + RE_Fibonacci(n-2)
}

console.log(RE_Fibonacci(7));