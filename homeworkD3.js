/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let result = 12 + 20

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x = 12

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe"
// let name = 'John Doe'
// let name = `John Doe`

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

let ex6result = 12 - x

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create a variable named x (its value must be less than 10). 
Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

x = 6
if(x === 1) {
    console.log("one")
} else if(x === 2) {
    console.log("two")
} else if(x === 3) {
    console.log("three")
} else if(x === 4) {
    console.log("four")
} else if(x === 5) {
    console.log("five")
} else if(x === 6) {
    console.log("six")
} else if(x === 7) {
    console.log("seven")
} else if(x === 8) {
    console.log("eight")
} else if(x === 9) {
    console.log("nine")
} else {
    console.log("not a valid number!")
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let ternaryExample = x > 10 ? true : false
// if (x > 10){
//     ternaryExample = true
// }
// else{
//     ternaryExample = false
// }

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
/*
1. Write  code to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
*/
let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;
let p = Math.sqrt(s * (s - a)(s - b)(s - c));
/*
2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.

*/
let a = 5;
let b = 10;
if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
  console.log(true);
} else {
  console.log(false);
}
/*
3. Create a variable which concatenates two strings.
*/
let str = "Strive " + "School";
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/
let x = 3;
let y = 6;
let z = -1;

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}
/*
 5. Write code to find the average of to given integers.
 */
let d = 4;
let h = 5;
let average = (d + h) / 2;
console.log(average);

/* 
 6. Find the longest of two given strings
 */

let str1 = "aaaa";
let str2 = "bb";
if (str1.length > str2.length) {
  console.log("str1 is longer");
} else {
  console.log("str2 is longer");
}
/**
  7. Write code to check whether a value is an integer or not.
  */
console.log(typeof str1);
if (typeof d === "number") {
  console.log(true);
} else {
  console.log(false);
}

/**
   8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
   */
let num = 400;
let per = 20;
let percentage = (400 / 100) * 20;
console.log(percentage);
/**
  9. Write code to check if a given number is even or odd.
 */
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}