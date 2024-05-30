function add (a: number, b: number){
    return a + b;
}

//Special Return type: void (Something that returns nothing)
// Undefined is also a valid type in typescript
//We should use void, instead of undefined as the return type of function
function printResult (num: number){
    console.log(num)
}

//function types
let combinedValues: (a: number, b: number) => number; //Setting the variable type as a particular function () => {};

function addAndHandle(a: number, b: number, c:(num: number) => void){
    const result = a+b;
    c(result)
}

combinedValues = add

printResult(add(5,12))

addAndHandle(10,20, (result) => {
    console.log(result)
})