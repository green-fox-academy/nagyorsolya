// Hours spent with coding / day
var codinghours = 6
console.log ("A Green Fox student usually spends 6 hours with coding daily.");
//Workdays in 17 weeks
var workdays = 17*5
console.log ("The semester is 17 weeks long and there are " + workdays +" working days in it.");
//How many hours are spent coding during the semester
var codingspent = codinghours*workdays
console.log ("This means that we spend " + codingspent + " hours coding during the semester.");
var semestercoding = 52*17
console.log ("If the average work hours weekly is 52, that means that we spend " + semestercoding + " hours coding during the semester.");

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var semesterlength = 17*7*24
var workhourstotal = 52*17
var averagetime = workhourstotal/semesterlength
var shortnumber = averagetime.toFixed(2)
console.log ("If the average work hours weekly is 52, we spend " + shortnumber + " % of the semester coding.");
