'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival


function securityCheck(a: any[]) {
  let newarray: any [];
  for (let i = 0; i < a.length; i++) {

    if (a[i].alcohol > 0 && a[i].guns > 0) {
      securityAlcoholLoot += a[i].alcohol;
      a[i].alcohol = 0;
      watchlist.push(a[i].name);
      a.splice(i,1);
      i = 0;
    }

      else if (a[i].alcohol > 0 && a[i].guns === 0) {
      securityAlcoholLoot += a[i].alcohol;
      a[i].alcohol = 0;
    }

      else if (a[i].alcohol === 0 && a[i].guns > 0) {
      watchlist.push(a[i].name);
      a.splice(i,1);
      i = 0;
    }

      else {

    };
  };
    console.log("Number of confescated alcoholic drinks: " + securityAlcoholLoot);
    console.log("People added to the watchlist: " + watchlist);
    console.log(a);
  return a;
  };

securityCheck(queue);