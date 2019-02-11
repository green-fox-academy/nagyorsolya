/*Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor (a,b) {
this.color = a;
this.width = b;
  }
  use () {
    this.inkAmount--;
   return this.inkAmount;
  }  
}

export let pen1 = new Sharpie ("yellow", 10);
export let pen2 = new Sharpie ("black", 0);

console.log(pen1.use());