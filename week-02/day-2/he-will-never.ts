'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

/*console.log(out.concat(hashmap[1],hashmap[12],hashmap[1], hashmap[2], hashmap[11], hashmap[1], hashmap[7], hashmap[11], hashmap[1], hashmap[49], hashmap[1], hashmap[3], hashmap[11], hashmap[1], hashmap [50], hashmap[11])); */

function concatRickRoll () {
let result = '';
let x = 0;
for (let i = 0; i < notSoCrypticMessage.length; i++) {

  result = result.concat(hashmap[notSoCrypticMessage[x]]);
  x = x+1;

};
return result;
};

console.log(concatRickRoll());