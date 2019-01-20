'use strict';

let lineCount: number = 4;
let m: number = lineCount-1; //This tells us how tall the pyramid should be

//The k cycle runs the cycles from 0-3
for (let k:number = 0; k<m+1;k++) {
    let space: string = "";
    let spacekszama: number = m-k;
    //The z cycle runs the cycles and subtracts the height from the current cycle showing how man 0s there should be (increases the number of zeros subtracted from the lines)
    for (let z:number = 0; z<spacekszama;z++) {
        space=space+" ";
    }
    //The i cycle runs the cycles and adds two more stars to the lines in each roun 
    let csillag:string = "";
    let csillagokszama:number = (k*2)+1;
    for (let i: number = 0; i<csillagokszama; i++) {
        csillag=csillag+"*";
    }
    console.log(space+csillag);
}