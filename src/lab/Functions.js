/*jshint esversion: 9 */
/*
File: ../keeper/src/lab/Functions.js

*/
import emojipedia from "../data/emojipedia";

const newEmojipediaMeaning = emojipedia.map(function (ePediaEntry) {
  return ePediaEntry.meaning.substring(0, 100);
});
console.log(newEmojipediaMeaning);
// -----------------  Testing function with map()
//
var numbersArray = [10, 20, 25, 30, 32];
//
function doubleNumber(x) {
  return x * 2;
}
//
const newNumbersArray = numbersArray.map(doubleNumber);
// Output numbers to console
console.log(newNumbersArray);
//
// -----------------  Testing function with map() (02)
//
// const newNumbersArrayB = numbersArray.map(function (x) { return x * 2; });
// Short version with the same results
const newNumbersArrayB = numbersArray.map( x => x * 2);
// Output numbers to console
console.log(newNumbersArrayB);
//
// -----------------  Testing function with filter()
//
// const newNumbersArrayBb = numbersArray.filter(function (x) { return x > 20; });
const newNumbersArrayBb = numbersArray.filter(x => x > 20);
// Output numbers to console
console.log(newNumbersArrayBb);
//
// -----------------  Testing function with reduce()
//
// const newNumbersArrayBc = numbersArray
//                 .reduce(function (accumulator, current) {
//                   return accumulator + current;
//                 });
const newNumbersArrayBc = numbersArray.reduce((accumulator, current) => accumulator + current);
// Output numbers to console
console.log(newNumbersArrayBc);
//
// -----------------  With find() - finds first number > 20
//
const newNumberA = numbersArray.find(num => num > 20);
//
// -----------------  With findIndex() - finds position of first number > 20
//
const newNumberB = numbersArray.findIndex(num => num > 20);
//
// -----------------  With forEach()
//
var numbersArrayB = [];
//
function doubleNumberB(x) {
  numbersArrayB.push(x * 2);
}
//
numbersArrayB.forEach(doubleNumberB);
//
// -----------------  With forEach() (2)
//
var numbersArrayC = [];
//
numbersArrayC.forEach(function (x) { numbersArrayC.push(x * 2); });
