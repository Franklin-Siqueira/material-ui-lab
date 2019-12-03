/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/ToDoInputArea.jsx

*/
import React, { useState } from "react";
//
function InputArea(props) {
  //
  const [inputText, setInputText] = useState("");
  const [buttonColor, setButtonColor] = useState(false);
  //
  function handleInputChange(event){
    // const { name, value } = event.target;
    const newInputValue = event.target.value;
    setInputText(newInputValue);
  }
  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  // }
  //
  //
  function altButtonStateMOver(){
      setButtonColor(true);
  }
  function altButtonStateMOut(){
      setButtonColor(false);
  }
  //
  return (
    <div className="form">
      <input onChange={handleInputChange}
              className="to-do-list-form-input"
                type="text"
                  value={inputText}
                    placeholder="What're you gonna do next?..."/>
      <button className="to-do-list-button"
                onMouseOver={altButtonStateMOver}
                  onMouseOut={altButtonStateMOut}
                  style={{ backgroundColor: buttonColor ? "black" : "white" }}
                    onClick={() => {
                                    props.onAdd(inputText);
                                    setInputText("");
                                  }}>
        <span className="to-do-list-button-span">Add</span>
      </button>
    </div>
  );
}
//
export default InputArea;
