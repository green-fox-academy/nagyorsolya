var nameToGreet: string = "Greenfox";

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

function greet(a?: any) {
    if (a === undefined) {
        a = "Anonymus";    }
console.log("Hello " + a + "!");
return a;
}

greet(nameToGreet);