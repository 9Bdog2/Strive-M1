/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/
const writeHeader = function(title) {
    console.log(`\n\n]>-------------<[ ${title.toUpperCase()} ]>-------------<[`)
  }
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
writeHeader(" Exercise 1")

function area (l1,l2){
    return l1*l2
    
}

console.log(area(10,10))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
writeHeader(" Exercise 2")

function crazySum(x,y){
    if (x===y) {
        return (x+y)*3
    } else {
        return x+y  
    }
    
}
console.log(crazySum(2,3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
writeHeader(" Exercise 3")


function crazyDiff(num) {
    if (num > 19) {
      return Math.abs(num - 19) * 3;
    } else {
      return Math.abs(num - 19);
    }
  }
console.log(crazyDiff(20))
// const crazyDiff = (num) =>
//   num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19);

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
writeHeader(" Exercise 4")

function boundary(n){
    if(n>=20 && n<=100 || n===400){
         return true
    }else{
        return false
    }
}
console.log(boundary(30))
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
writeHeader(" Exercise 5")

function strivify(str) {
    if (str.startsWith("Strive")) {
      return str;
    } else {
      return "Strive " + str;
    }
  }
  //const strivify = (str) => (str.startsWith("Strive") ? str : "Strive " + str);
  console.log(strivify("Strivers"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
writeHeader(" Exercise 6")

function check3and7(x){
    if (x>0 && x%3===0 || x%7===0) {
        return "The number is a multiple of 3 or 7 "
    }else{
        return "The number is not a multiple of 3 or 7"
    }
}
// const check3and7 = (n) =>
//   n >= 0 && (n % 3 === 0 || n % 7 === 0) ? true : false;
console.log(check3and7(-1))
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
writeHeader(" Exercise 7")

function reverseString(str) {
    return str.split("").reverse("").join("");
  }
console.log(reverseString("Hello"))
  //const reverseString = (str) => str.split("").reverse("").join("");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
writeHeader(" Exercise 8")


function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(upperFirst("strivers"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
writeHeader(" Exercise 9")

function cutString(str) {
    return str.slice(1, str.length - 1);
  }
  console.log(cutString("hello"));
  

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
writeHeader(" Exercise 10")

function giveMeRandom(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  }
  console.log(giveMeRandom(5));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/


/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
writeHeader("Extra Exercise 11")

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
writeHeader("Extra Exercise 12")

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/
writeHeader("Extra Exercise 13")

/* WRITE YOUR CODE HERE */

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/
writeHeader("Extra Exercise 14")

/* WRITE YOUR CODE HERE */

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
writeHeader("Extra Exercise 15")

/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/
writeHeader("Extra Exercise 16")

/* WRITE YOUR CODE HERE */

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/
writeHeader("Extra Exercise 17")

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/
writeHeader("Extra Exercise 18")

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/
writeHeader("Extra Exercise 19")

/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/
writeHeader("Extra Exercise 20")

/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/
writeHeader("Extra Exercise 21")

/* WRITE YOUR CODE HERE */