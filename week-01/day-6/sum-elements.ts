// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let r = [54, 23, 66, 12];

console.log(r[1]+r[2]);

//Added a nice for loop as a plus because I need to practice the goddamn for loops

let result = 0;
for (let i = 0;i<r.length;i++) {
    result += r[i];
}

console.log(result);