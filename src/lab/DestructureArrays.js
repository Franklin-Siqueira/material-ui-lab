/*jshint esversion: 9 */
/*
File: ../keeper/src/lab/DestructureArrays.js

*/
import React from "react";
//
import notes from "../data/notes.js"
import contacts from "../data/contacts.js";
import emojipedia from "../data/emojipedia.js";
import cars from "../data/cars";
//
const [honda, tesla] = cars;
//
const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed }} = tesla;
//
const { coloursByPopularity: [hondaTopColour] } = honda;
const { coloursByPopularity: [teslaTopColour] } = tesla;
//
function CarsRenderer() {
  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}
//
// {
//   title: "New Note 01",
//   note: "Anythin to be done",
//   agent: "Franklin",
//   date: "11/24/19"
// },
const [noteOne, noteTwo, noteThree] = notes;

console.log(noteOne);
console.log(noteTwo);
console.log(noteThree);

const { title, note, agent, date } = noteOne;

console.log(title);
//
export default CarsRenderer;
