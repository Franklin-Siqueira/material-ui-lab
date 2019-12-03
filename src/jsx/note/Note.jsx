/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/Note.jsx

*/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from '@material-ui/core/Grid';
//
//const myName = "Franklin";
//
function Note(props){
  //
  function handleDelButtonClick(event){
    event.preventDefault();
    props.onDelete(props.id);
  }
  //
  return (

      <div className="note">
        <h1><span><FontAwesomeIcon icon="check-square" /></span> {props.title}</h1>
        <hr />
        <p>{props.note}</p>
        <div className="note-footer">
          <p>Created by {props.agent} on {props.date}</p>
          <button onClick={handleDelButtonClick}>Delete...</button>
        </div>
      </div>

  );
};
export default Note;
