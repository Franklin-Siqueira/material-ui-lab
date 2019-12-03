/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/TodoList.jsx

*/
import React, { useState } from "react";
//
import ToDoItem from "./ToDoItem";
import InputArea from "./ToDoInputArea";
//
function TodoList() {
  // Moved to ToDoInputArea -----------------------------------------
  // useState variables/objects/methods
  // const [buttonColor, setButtonColor] = useState(false);
  // const [inputText, setInputText] = useState("");
  //
  const [items, setItems] = useState([]);
  // Moved to ToDoInputArea -----------------------------------------
  // function handleInputChange(event){}
  //
  function addItem(inputText){
    // setItems(prevItem => ({ ...prevItem, [items]: inputText }));
    setItems(prevItem => [ ...prevItem, inputText ]);
    // setInputText("");
  }
  // Not used
   //  function deleteItem(id) {
   //   setItems(prevItems => {
   //     return prevItems.filter((item, index) => {
   //       return index !== id;
   //     });
   //    });
   //   }
   // <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
  //
  // Moved to ToDoInputArea -----------------------------------------
  // function altButtonStateMOver(){}
  // function altButtonStateMOut(){}
  //
  return (
    <div className="to-do-list-body">
      <div className="to-do-list-container">
        <div className="to-do-list-heading">
          <h1 className="to-do-list-heading-h1">Frank's To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((toDoItem, i) => <ToDoItem key={i} item={toDoItem} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}
//
export default TodoList;
// Moved to ToDoInputArea -----------------------------------------
// <div className="form">
//   <input onChange={handleInputChange}
//           className="to-do-list-form-input"
//             type="text"
//               name="inputText"
//                 value={inputText}
//                   placeholder="What're you gonna do next?..."/>
//   <button className="to-do-list-button"
//             onMouseOver={altButtonStateMOver}
//               onMouseOut={altButtonStateMOut}
//                 style={{ backgroundColor: buttonColor ? "black" : "white" }}
//                   onClick={addItem}>
//     <span className="to-do-list-button-span">Add</span>
//   </button>
// </div>
