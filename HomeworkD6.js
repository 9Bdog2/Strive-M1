/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/
const writeHeader = function(title) {
    console.log(`\n\n]>-------------<[ ${title.toUpperCase()} ]>-------------<[`)
  }
//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
writeHeader(" Exercise A")

let variable = "Hello World"
console.log(variable)


writeHeader(" Exercise B")

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20
console.log(sum)


writeHeader(" Exercise C")

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = Math.floor(Math.random() * 20)
console.log(random)
// let random = Math.random() * 20

writeHeader(" Exercise D")

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name    : "Bogdan",
    surname : "Birau" ,
    age     :  28     ,
}
console.log(me)
writeHeader(" Exercise E")

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/


delete me.age
console.log(me)


writeHeader(" Exercise F")

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["Javascript", "HTML" , "CSS"]
console.log(me)



writeHeader(" Exercise G")

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop()
console.log(me)


// JS Functions

writeHeader(" Exercise 1")

/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice(){
    let x = Math.floor(Math.random() * 6)
    console.log(x)
}

dice()

writeHeader(" Exercise 2")

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(x,y){
    let bigger = x>y ? x : y
    console.log(bigger)
}
whoIsBigger(5,4)

/* function whoIsBigger(x,y){
    if(x > y){
        return x
    }else{
        return y
    }
} */

writeHeader(" Exercise 3")

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.  ?
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

/* function splitMe (str){
    
    let x = []
    for (let i = 0; i < str.length; i++) {
        x[i] = str[i]  // return words logic ?
    }
    console.log(x)
} */

function splitMe(str){
    return str.split(" ")
}
console.log(splitMe("Hello World"))

splitMe("Hello World")


writeHeader(" Exercise 4")

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

/* function deleteOne (str, boolean){
    let x = ""
    if (boolean === true) {
        for (let i = 1; i < str.length; i++) {
            x += str[i]
        }   
        console.log(x)
    }else{
        for (let i = 0; i < str.length - 1; i++) {
            x += str[i]
        }
        console.log(x)
    }
    
} 
deleteOne("Hannibal",false)
*/

function deleteOne(str, boolean){
    placeHolder = ""
    if (boolean) {
        return str.substring(1)
        console.log(str)
    }else{
        for (let i = 0; i < str.length - 1; i++) {
            placeHolder += str[i]
        }
        console.log(placeHolder)
    }
}

deleteOne("Hanibal", false)




writeHeader(" Exercise 5")

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits. ?
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

/* function onlyLetters(str){
    let x = ""
    for (let i = 0; i < str.length; i++) {
        currentLetter = str[i]
        if (!isNaN(currentLetter) ) { // it does not recognise number
            continue
        }else{
            x += str[i]
        }
    }
    console.log(x)
}

onlyLetters("I have 4 dogs") */

function onlyLetters(str){
    let result = ""
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i]
        if(isNaN(currentLetter)){
            result += currentLetter
        }
    }
    console.log(result) 
}
onlyLetters("I have 4 dogs") 


writeHeader(" Exercise 6")

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address. ?
*/

/* function isThisAnEmail(str) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (str.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

isThisAnEmail("johnDoe@gmail.com") */

function isThisAnEmail(email){
    if (email.includes("@") > 0 && email.indexOf(".") > 0) {
        return true
    }else{
        return false
    }
}

console.log(isThisAnEmail("johnDoe@gmail.com"))

writeHeader(" Exercise 7")

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

function whatDayIsIt(){
    let day = new Date();
    console.log(day)
    let dayOfTheWeek = day.getDay()
    console.log(dayOfTheWeek)
}
whatDayIsIt()


writeHeader(" Exercise 8")

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted    ?
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/


/* function rollTheDices(number){
    let values = []
    let sum = 0
    let placeHolder
    for (let i = 0; i < number; i++) {       
        placeHolder = dice()
        sum += parseInt(placeHolder)       /// adding to sum 
        values.push(placeHolder)
    }
    console.log(sum)
    let diceObject = {
        sum : sum,
        values : values
    }
}
rollTheDices(3) */

writeHeader(" Exercise 9")

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date. ?
*/

function howManyDays(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}
console.log(howManyDays(1/1/2020, 1/1/2021))



/* function howManyDays(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

console.log(howManyDays((1/1/2020, 1/1/2021))) */


writeHeader(" Exercise 10")

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

function isTodayMyBirthday(boolean){

}


// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

/* This movies array is used throughout the exercises. Please don't change it :)  */


writeHeader(" Exercise 11")

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

function deleteProp(object, str){

}


writeHeader(" Exercise 12")

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

function olderMovie(){
    for (let i = 0; i < movies.length; i++) {
        /* if (movies[i].Year > movies[i+1].Year) {
            let year = parseInt(movies[i].Year)
        }else{continue} */
        console.log(movies[i].Year)

    }
    
}

olderMovie()

writeHeader(" Exercise 13")

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

function countMovies(){
    let x = 1
    for (let i = 0; i < movies.length; i++) {
        x++
    }
    console.log(`There are ${x} movies in this array`)
}
countMovies()


writeHeader(" Exercise 14")

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

function onlyTheTitles(){
    let titles = []
    for (let i = 0; i < movies.length; i++) {
        titles.push(movies[i].Title) 
    }
    console.log(titles)
}
onlyTheTitles()

writeHeader(" Exercise 15")

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.  ?
*/

function onlyInThisMillennium(){
    let millennium = []
    for (let i = 0; i < movies.length; i++) {
        millennium.push(movies[i].Year) 
    }
    for (let i = 0; i < millennium.length; i++) {
        if (parseInt(millennium[0]) >= 2000 ) {
            continue
        }else{
            
        }
        
    }
}
onlyInThisMillennium()

writeHeader(" Exercise 16")

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.    ?
*/

function getMovieById(id){
    for (let i = 0; i < movies.length; i++) {
        movies[i].Id = i
    }
    return movies.Id === id
}
getMovieById(1)

writeHeader(" Exercise 17")

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/


function sumAllTheYears(){

}


writeHeader(" Exercise 18")

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/


function searchByTitle(){

}



writeHeader(" Exercise 19")

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/


function searchAndDivide(){

}


writeHeader(" Exercise 20")

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.?
*/

function removeIndex(){

}


// [EXTRAS] JS Advanced
writeHeader(" Exercise 21")

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.?
  Example:
  halfTree(3)
  *
  **
  ***
*/

function halfTree(){

}

writeHeader(" Exercise 22")

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.?
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

function tree(){

}


writeHeader(" Exercise 23")

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.   ?
*/

function isItPrime(){
    
}

  