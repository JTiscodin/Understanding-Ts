function add(a, b) {
    return a + b;
}
//Special Return type: void (Something that returns nothing)
// Undefined is also a valid type in typescript
//We should use void, instead of undefined as the return type of function
function printResult(num) {
    console.log(num);
}
//function types
var combinedValues; //Setting the variable type as a particular function () => {};
function addAndHandle(a, b, c) {
    var result = a + b;
    c(result);
}
combinedValues = add;
printResult(add(5, 12));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
