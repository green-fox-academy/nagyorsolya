// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
let b = 5
console.log(sum(b));

function sum(a) {
    let result = 0;

    for (let i = 1; i <= a; i++) {
        result += i;
        console.log('Result: ' + result);
        console.log('Counter: ' + i);
    }

    return result;
};

