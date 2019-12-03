/*jshint esversion: 9 */
/*
File: ../keeper/src/lab/FormHandling.js

*/
import React, { useState } from "react";
//
function FormHandling() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  //
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  //
  function handleClick(event) {
    setHeading(name);
    // Preventing default form behavior (update/reload page)
    event.preventDefault();
  }
  //
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
//
export default FormHandling;
