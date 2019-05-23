// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideNumber(a) {
  try {
    if (a === 0) {
      throw Error("Parameter can't be 0");
    }
  } catch (e) {
    console.log('Error: ' + e.message);
  }
  return 10 / a;
}

divideNumber(0);
