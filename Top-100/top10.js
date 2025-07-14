// 1.Factorial of a Number
// Write a function to compute the factorial of a number.
// git push --set-upstream origin main
/*
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
*/

// 2. Prime Number Checker . Write a function to check if a number is prime.

// function primenumber(num){
    
//     if(num<2 )
//         return `${num}number is not prime`;

//     for (let i =2; i<=Math.sqrt(num); i++){
//         if(num%i ===0){
//             return `${num} is not a prime number`
//         }
//     }
//     return `${num} is a prime number`
   
// }

// console.log(primenumber(5));

// 3. Write a function to check if a string is a palindrome.

// function isPalindrom(str) {
//     let onlyLettersAndNumbers = str.replace(/[^a-zA-Z0-9]/g, '');

//     let lowercaseStr = onlyLettersAndNumbers.toLowerCase();

//     let reversedStr = lowercaseStr.split('').reverse().join('');

//     return lowercaseStr === reversedStr ;
// }

// console.log(isPalindrom(' nan'));

// 4. Reverse a String . Write a function to reverse a given string.

let name = 'hello';
let result = name.split('');
console.log(result);

function reverseString (str){
    return str
    .split('')
    .reverse()
    .join()
}

console.log(reverseString("arman"));