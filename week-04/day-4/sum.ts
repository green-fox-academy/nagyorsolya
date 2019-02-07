'use strict';

export class Sum {
  list: number [];
  constructor (newList:number []) {
    this.list = newList;
  }
  sum(): number {
   return this.list.reduce(function (summaryValue:number, currentNumber: number) {
      return summaryValue += currentNumber;
    
    },0);
  }
};