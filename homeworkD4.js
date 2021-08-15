/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/
const writeHeader = function(title) {
    console.log(`\n\n]>-------------<[ ${title.toUpperCase()} ]>-------------<[`)
  }
/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/
writeHeader(" Exercise 1")

let positiveNumbers = [ 1, 2, 3, 4, 5]
console.log(`${positiveNumbers}`)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
writeHeader(" Exercise 2")

let human ={
    name : "Bogdan",
    surname : "Birau",
    email : "birau.bogdan92@gmail.com",
    age : 28,
}
console.log(human)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
writeHeader(" Exercise 3")

human.drivingLicense = true
console.log(human)

/* EXERCISE 4
Remove from the previously created object the age property.
*/
writeHeader(" Exercise 4")

delete human.age
console.log(human)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
writeHeader(" Exercise 5")

let human2 = {
    name : "John",
    surname : "Doe",
    email : "John.Doe@gmail.com",
}

if(human.email === human2.email){
    console.log(`The email ${human.email} is the same as ${human2.email}`)
}else{
    console.log(`The email ${human.email} is not the same as ${human2.email}`) 
}



/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).   
Write an algorithm that calculates the total cost to charge the user with.
*/
writeHeader(" Exercise 6")

let totalShoppingCart = 40

if(totalShoppingCart <= 50){
    totalShoppingCart += 10 
    console.log(`\n The total shipping cost is ${totalShoppingCart}`)
}else{
    console.log(`\n The total shipping cost is  ${totalShoppingCart} shipping is free` )
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost. 
*/
writeHeader(" Exercise 7")

if(totalShoppingCart <= 50){
    totalShoppingCart += 10 
    totalShoppingCart = totalShoppingCart -(totalShoppingCart * 0.2)
    console.log(`\n The total shipping cost is ${totalShoppingCart}`)
}else{
    totalShoppingCart = totalShoppingCart -(totalShoppingCart * 0.2)
    console.log(`\n The total shipping cost is  ${totalShoppingCart} shipping is free` )
}

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
writeHeader(" Exercise 8")

let car1 ={
    brand        : "BMW",
    model        : "z200",
    licensePlate :  "AR31ZZZ"
}

let car2 ={...car1,licensePlate:"AR32ZZZ"}
let car3 ={...car1,licensePlate:"AR33ZZZ"}
let car4 ={...car1,licensePlate:"AR34ZZZ"}
let car5 ={...car1,licensePlate:"AR35ZZZ"}

console.log(car1,car2,car3,car4,car5)


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
writeHeader(" Exercise 9")

let carsForRent =[car1,car2,car3,car4,car5]
console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
writeHeader(" Exercise 10")

carsForRent.pop()
carsForRent.shift()

console.log(carsForRent)


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.  
*/
writeHeader(" Exercise 11")

console.log(car1.brand, car1.licensePlate ,car1.model)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
writeHeader(" Exercise 12")

let carsForSale = [car1,car5,car2]

let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length,
}

console.log(totalCars)


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
writeHeader(" Exercise 13")

console.log(carsForSale[0].licensePlate)
console.log(carsForSale[1].licensePlate)
console.log(carsForSale[2].licensePlate)


/* 
----------------Extra Questions--------------
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/
writeHeader("Extra Exercise 1")

let numbers = [2, 3, 5 , "cat" ,"Dog", 10, 100] 

/* numbers.reverse()
console.log(numbers) */

for(let i = 0; i < numbers.length / 2; i++){
    let temp = numbers[i]
    numbers[i] = numbers[numbers.length - i - 1]
    numbers[numbers.length - i - 1] = temp
}
console.log(numbers)


/* EXERCISE 2
Write the code to get the maximum value in an array. 
*/
writeHeader("Extra Exercise 2")


 let max = 0

for (let i = 0; i < numbers.length; i++) {
    if(max < numbers[i]){
        max = numbers[i]
    }
    
}

console.log(`The maximun number is ${max}`) 


/* EXERCISE 3
Write the code to get the minimum value in an array. 
*/
writeHeader("Extra Exercise 3")

let min = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if(min > numbers[i]){
        min = numbers[i]
    }
    
}
console.log(`The minimun number is ${min}`) 

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
writeHeader("Extra Exercise 4")

let evenNumbers = [1, 4, 6, 5, "cat", "dog", {name : "Test"}]
let acc = []
for (let i = 0; i < evenNumbers.length; i++) {
    if(typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 0)
    acc.push(evenNumbers[i])
}
console.log(acc)
/* EXERCISE 5
Write the code to delete even entries from an array.
*/
writeHeader("Extra Exercise 5")

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
writeHeader("Extra Exercise 6")

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
writeHeader("Extra Exercise 7")

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
writeHeader("Extra Exercise 8")

/* WRITE YOUR CODE HERE */



