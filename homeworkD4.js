/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

let positiveNumbers = [ 1, 2, 3, 4, 5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let human ={
    name : "Bogdan",
    surname : "Birau",
    email : "birau.bogdan92@gmail.com",
    age : 28,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

human.drivingLicense = true
console.log(human)

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete human.age
console.log(human)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let human2 = {
    name : "John",
    surname : "Doe",
    email : "John.Doe@gmail.com",
}

if(human.email === human2.email){
    console.log('The emails from are the same')
}else{
    console.log('The email ${human.email} is not the same as ${human2.email}') //${human.email} is not recognized
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).   
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 60

if(totalShoppingCart > 50){
    console.log("\nThe total shipping cost is " + totalShoppingCart +","+ "shipping is free")
}else{
    totalShoppingCart = totalShoppingCart + 10
    console.log("\nThe total shipping cost is " + totalShoppingCart )
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost. ?
*/
let totalCost

if(totalShoppingCart > 50){
    totalCost = totalShoppingCart % 0.5
    console.log(totalCost)
    totalShoppingCart = totalCost + totalShoppingCart
    console.log("\nThe total shipping cost is " + totalShoppingCart +","+ "shipping is free")
}else{
    totalShoppingCart = totalShoppingCart + 10
    totalCost = totalShoppingCart % 20
    totalShoppingCart += totalCost
    console.log("\nThe total shipping cost is " + totalShoppingCart )
}

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car ={
    brand        : "BMW",
    model        : "z200",
    licensePlate :  "AR30DZK"
}
let car1 ={}
let car2 ={}
let car3 ={}
let car4 ={}
let car5 ={}

Object.assign(car1,car)
Object.assign(car2,car)
Object.assign(car3,car)
Object.assign(car4,car)
Object.assign(car5,car)

car1.licensePlate = "AR31ZZZ"
car2.licensePlate = "AR32ZZZ"
car3.licensePlate = "AR33ZZZ"
car4.licensePlate = "AR34ZZZ"
car5.licensePlate = "AR35ZZZ"

console.log(car,car1,car2,car3,car4,car5)


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent =[car,car1,car2,car3,car4,car5]
console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop()
carsForRent.shift()

console.log(carsForRent)


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.  ?
*/

console.log(carsForRent.brand, carsForRent.licensePlate )

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = []

carsForSale.push("BMW")
carsForSale.push("Ford")
carsForSale.push("Audi")
console.log(carsForSale)

let totalCars = []

totalCars = carsForSale.concat(carsForRent)
console.log(totalCars)


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale)

/* 
----------------Extra Questions--------------
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let numbers = [1, 3, 5 , -1, "cat" ,"Dog"] 

numbers.reverse()
console.log(numbers)

/* EXERCISE 2
Write the code to get the maximum value in an array. ?
*/


 let max = 0

for (let i = 0; i < numbers.length; i++) {
    if(max < numbers[i]){
        max = numbers[i]
    }
    
}

console.log(max) 


/* EXERCISE 3
Write the code to get the minimum value in an array. ?
*/

let min = 2

for (let i = 0; i < numbers.length; i++) {
    if(min > numbers[i]){
        min = numbers[i]
    }
    
}

console.log(min) 

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/* for (let i = 0; i < numbers.length; i++) {
    if()
    
} */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */



