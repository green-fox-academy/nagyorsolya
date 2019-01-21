// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


function printParams (...a) {
for (let i = 0; i<a.length;i++) {
    console.log(a [i]);
};

};

printParams (1,2,3,4,5);
