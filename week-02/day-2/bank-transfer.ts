'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance (accountnumber:number) {
let newarray: any = []
  for (let i = 0; i <accounts.length; i++) {
    if (accountnumber === accounts[i].accountNumber) {
      newarray.push(accounts[i].clientName, accounts[i].balance);
      console.log(newarray);
    }
  };
return accountnumber;
};

getNameAndBalance(11234543);

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount (a: any [], b: number, c: number, d: number) {
  let x: boolean = undefined;
  let y: boolean = undefined;
  let i: number = 0;
  let z: number = 0;
  let n: number = 0;
  let m: number = 0;
    for (i; i < a.length; i++) {
      if (b === accounts[i].accountNumber) {
        n = i;
        x = true;
    }
  };
    for (z; z < a.length; z++) {
      if (c === accounts[z].accountNumber) {
        m = z;
        y = true;
      }
    };
    if ( x && y === true) {
      accounts[n].balance -= d;
      accounts[m].balance += d;
      console.log(accounts);
    }
    else {
      console.log("404 - account not found");
    };
    return accounts;
  };
  
  transferAmount(accounts, 45336, 23456311, 500.0);
  

//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

/*export = {
  getNameAndBalance,
  transferAmount,
  accounts
};*/