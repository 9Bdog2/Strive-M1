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

/*
There are 7 types of Data types: Number, Boolean, NNULL, String, Undefined, BigInt and Symbol.  Number have to do with matemathical numbers like 1, 2, 3.5 .
 Boolean are of two types, true or false. NULL is a void data type like 0 but a bit more than that. String has to do with words. 
 Undefined is something that has not yet been given a value. BigInt are extremply big numbers and Symbol is used for when working with 
special characters.
 */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/
/*
 A variable is something we give a value to in programing languages, it can be given multiple values.
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20
console.log(sum)

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x = 12
console.log(x)

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe"
console.log(name)

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

let y = 12 - x
console.log(y)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2). ?
*/

let name1 ="john"
let name2 ="John"
if(name1 === name2)
console.log("Name1 is different from Name2")

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.). +?
*/

x = 9
console.log(x)
if(x=9){
    console.log("Nine")
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) ) ?
*/



// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/





/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.  +
*/
x = 4
y = 4

if (x === 8 || y === 8) {
    console.log("X or Y is equal to 8")
} if(x+y === 8 || x-y === 8) {
    console.log("The sum or difference between X and Y is 8")
} else{
    console.log("None of them are 8")
}

/*
  3. Create a variable which concatenates two strings. +
*/

let concat = name1 + name2
console.log(concat)

/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console. ?
*/



/*
 5. Write code to find the average of two given integers. +
*/

let average = (x + y) / 2
console.log("The average is " , average)

/* 
  6. Find the longest of two given strings
*/

/*
 7. Write code to check whether a value is an integer or not. ?
*/

/* let checkInteger = true
if (checkInteger ===  isInteger(x)) {
    console.log("The number is an Integer")
} */

/*
 8. Write code to calculate the percentage (%) of a number. +
        Ex.: 20% of 400 is 80
*/

x = 1234
y = 1233

let percentage = y / x * 100
console.log("The percentage is",percentage , "%")


/*
 9. Write code to check if a given number is even or odd. +
*/
if (x%2 === 0) {
    console.log("The number" , x , "is even")
}else{
    console.log("The number" , x , "is odd")
}