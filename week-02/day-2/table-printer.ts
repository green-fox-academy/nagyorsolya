'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

function dictionary (a: any []) {
  let pattern = "+";
for (let i = 0; i < 18; i++) {
pattern += "-";
};
let pattern2 = "+";
for (let i = 0; i<"Needs cooling".length;i++) {
  pattern2 += "-"; 
};
let pattern3 = "+";
for (let i = 0; i<"In stock".length;i++) {
  pattern3 += "-"; 
};
  console.log(pattern+pattern2+pattern3+"+");
  console.log("| Ingredient | Needs cooling | In stock |");
  console.log(pattern+pattern2+pattern3+"+");

  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < 18 - (a[i].name.length); y++) {
      a[i].name += " "
    };
    if (a[i].needsCooling == true) {
  console.log ("| " + a[i].name + " | " + "Yes" + " | " + a[i].inStock+ " | ");
    }
    else {
  console.log ("| " + a[i].name + " | " + "No" + " | " + a[i].inStock+ " | ");
    };
  };
  console.log(pattern+pattern2+pattern3+"+");
};

(dictionary(ingredients)); 

/* function getLengthOfLongestElement(arr) {
  var biggestNum: any = 0;

 /*for(var i=0; i< arr.length; i++){

    if(arr[i].name.length > biggestNum){
        biggestNum = arr[i].name.length;
     }
 };
 return biggestNum;
};

let repetition = getLengthOfLongestElement(ingredients) */