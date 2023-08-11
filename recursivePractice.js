/* Write a function called sumRange. It will take a number 
and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

*/

sumRange = (n) => {
    if(n === 1){
        return 1
    } else {
        return n + sumRange(n - 1)
    }
}

answer = sumRange(3)

/* Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
*/

power = (n,e) => {
    
    if(e === 0){
        return 1
    } else {
        return n * power(n, e - 1)
    }
}

answer2 = power(2,4)


/* Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number 
is the result of that number multiplied by the number before it, and the number before that number, and so on, 
until you reach 1. The factorial of 1 is just 1.
*/

const fact = (n) => {
    if(n === 1){
        return 1
    } else {
        return n * fact(n - 1)
    }
   
}

answer3 = fact(5)

/* 
Question 4: Check all values in an array
Write a function called all which accepts an array and a callback and returns true 
if every value in the array returns true when passed as parameter to the callback function

Sample:

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

*/

const all = (n) = {
    


}



