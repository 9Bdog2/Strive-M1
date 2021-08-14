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
Create and array containing the first 5 positive numbers.
*/

let array = [1,2,3,4,5]

/* WRITE YOUR CODE HERE */


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let person = {
    name: "NameTest",
    surname:"SurnameTest",
    email:"test@strive.school",
    age: 25
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

person.drivingLicense = true
 person["drivingLicense"] = true

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete person.age

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let secondPerson = {
    name: "Second",
    surname:"Surname",
    email: "second@strive.school"
}

console.log("The email is equal to the previous one: ", person.email !== secondPerson.email)

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 100
if (totalShoppingCart <= 50)
    totalShoppingCart += 10 // totalShoppingCart = totalShoppingCart + 10

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 100

if (totalShoppingCart <= 50)
    totalShoppingCart += 10 // totalShoppingCart = totalShoppingCart + 10

let discount = totalShoppingCart * 0.2
totalShoppingCart = totalShoppingCart - discount

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car1 = { brand: "Toyota", model: "Yaris", licensePlate: "AZXSASS"}
let car2 = {
    ...car1,
    licensePlate: "Whatever"
}
let car3 = {
    ...car1,
    licensePlate: "Whatever1"
}
let car4 = {
    ...car1,
    licensePlate: "Whatever2"
}
let car5 = {
    ...car1,
    licensePlate: "Whatever3"
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [ car1, car2, car3, car4, car5]

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop()
carsForRent.shift()

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(car.brand,car.model, car.licensePlate)

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [car1,car5, car2]
let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale[0].licensePlate)
console.log(carsForSale[1].licensePlate)
console.log(carsForSale[2].licensePlate)

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/

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
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let array = [1, 2, 3, 4, 5]
// [ 1,2,3,4,5 ] => Swap 0 and 4
// [ 5,2,3,4,1 ] => Swap 1 and 3 -> i+i, lenght - i - 1
// [ 5,4,3,2,1 ]
for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i] //Save var for later
    array[i] = array[array.length - i - 1] //replace the last with the first, then the second with the ...
    array[array.length - i - 1] = temp
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let maxArray = [1, 2, 10, 20, 50, 0, 5, 2]
// take the first element
let maxValue = maxArray[0]
for (let i = 1; i < maxArray.length; i++) {
    if (maxArray[i] > maxValue)
        maxValue = maxArray[i]
}

console.log("The maximum is: ", maxValue)
// if the second is greater than the first, I have a new max
// else, i'll continue with the third one
// until I reach the end of my array


/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

let minArray = [1, 2, 10, 20, 50, 0, 5, 2]
// take the first element
let minValue = minArray[0]
for (let i = 1; i < minArray.length; i++) {
    if (minArray[i] < minValue)
        minValue = minArray[i]
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

let evenNumbers = [1, 5, 2, 3, "cat", "whatever", {
    name: "Test"
}]

let acc = []

for (let i = 0; i < evenNumbers.length; i++) {
    if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 1)
        acc.push(evenNumbers[i])
}


/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

let evenNumbers = [1, 5, 2, 3, "cat", "whatever", {
    name: "Test"
}]



for (let i = 0; i < evenNumbers.length; i++) {
    if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 1) {
        evenNumbers.splice(i, 1)
        i-- // i = i -1
    }
}


/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let str = "asuausahduasudaud"
let result = ""
for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case "a":
        case "e":
        case "i":
        case "u":
        case "o":
            break;
        default:
            result += str[i]
    }
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

let toBeIncreased = [ 1, 5, 10,"cat", "bob", true, 10]

for (let i = 0; i < toBeIncreased.length; i++) {
    if (typeof toBeIncreased[i] === "number")
        toBeIncreased[i]++
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let advert = ["strive", "is", "great"]
for (let i = 0; i < advert.length; i++)
    advert[i] = advert[i].length

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/