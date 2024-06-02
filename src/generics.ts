type Input = number | string

function identify<T>(arr: T[]){
    return arr[0]
}


var test = identify<String>(["Jatin", "Dhruv","Aryan"])

//Another way of writing the above line
var test2 = identify(["Jatin", "Dhruv","Aryan"])

test.toUpperCase()
test2.toUpperCase()