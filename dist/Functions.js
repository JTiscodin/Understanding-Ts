"use strict";
function printResult(num) {
    console.log(num);
}
let combinedValues;
function addAndHandle(a, b, c) {
    const result = a + b;
    c(result);
}
combinedValues = add;
printResult(add(5, 12));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
