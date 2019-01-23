
let b = 6;

function factorialize(a) {
    let result = 1

    for (let i = 1; i < a + 1; i++) {
        result *= i;
    };

    return result;
}

console.log(factorialize(b));
