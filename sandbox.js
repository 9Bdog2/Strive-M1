function howManyDays(selectedDate){
    let today = new Date()

    let difference = Math.abs(selectedDate - today)

    console.log(difference)
    return difference / (1000 *60 *60 *24)
}

console.log(Math.floor(howManyDays(new Date("2021.01.01"))))
