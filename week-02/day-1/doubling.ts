// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console
let baseNum = "123"

function doubling(a:any) :number {
a = parseInt(a)*2;
return a;
}

console.log(doubling(baseNum));