/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/ToDoItem.jsx

*/
import React, { useState } from "react";
//
function ToDoItem(props){
  //
  const [isDone, setIsDone] = useState(false);
  //
  function handleClick(){
    setIsDone(prevState => { return !prevState; });
  }
  //
  return (
    <div onClick={handleClick}>
      <li className="to-do-list-li" style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.item}</li>
    </div>);
}
//
export default ToDoItem;
// className="to-do-list-li"
// style={{ textDecoration: "line-through" }}
