// Write a recursive function that takes one parameter: n and counts down from n.

function counter (a: number): number {
  if (a === 0) {
    return 0;
  }
  else {
    return a + counter(a-1);
  }
};

console.log(counter(6));
