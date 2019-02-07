import {Apple} from './apples'
import {Sum} from './sum'

let test = require('tape');

/*test('Get the name field of class', (t) => {
  let newApple = new Apple ("green");

  t.equal(newApple.getApple(), 'apple');
  t.end();
});*/

test('Get the sum of the two numbers', (t) => {
  let newList = new Sum ([0,1,2,3])
  t.equal (newList.sum(), 6)
  t.end();
});