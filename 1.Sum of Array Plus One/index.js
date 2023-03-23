/*Problem
Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
*/ 

/*
function sumArray(array) {
    const ourArray = [1, 4, 0, 9, -3];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([1, 4, 0, 9, -3]));
  */

  function sumArray(array) {
    let sum = 0;
  
    array.forEach(item => {
      sum += item;
    });
  
    console.log(sum);
    return sum;
  }
  
  sumArray([1, 4, 0, 9, -3]);