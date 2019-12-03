/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/note/NewNote.jsx

*/
import React, { useState }  from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));
//
// export default function BasicTextFields() {
//   const classes = useStyles();
  //
  // return (
  //   <form className={classes.root} noValidate autoComplete="off">
  //     <TextField id="standard-basic" label="Standard" />
  //     <TextField id="filled-basic" label="Filled" variant="filled" />
  //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </form>
//   );
// }

//
function NewNote(props) {
  const [isExpanded, setExpanded] = useState(false);
  function expand() {
    if (note.title === "" || note.note === ""){
      setExpanded(true);
    } else {
      setExpanded(!isExpanded);
    }
  }
  // function collapse() {
  //   if (note.title !== "" && note.note !== ""){
  //     setExpanded(!isExpanded);
  //   }
  // }
  //
  // {
  //   title: "New Note 01",
  //   note: "Anythin to be done",
  //   agent: "Franklin",
  //   date: "11/24/19"
  // }
  const [note, setNote] = useState({title: "", note: "", agent: "Franklin", date: ""});
  //
  function handleChanges(event){
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }
  //
  function clickSubmit(event){
    event.preventDefault();
    note.date = new Date().getFullYear();
    props.onAdd(note);
    setNote({title: "", note: "", agent: "Franklin", date: ""});
    expand();
    //setExpanded(!isExpanded);
    // event.preventDefault();
  }
  // <input className="note-form-input"
  //   onChange={handleChanges}
  //   name="title"
  //   value={note.title}
  //   placeholder="Note title..." />
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <TextField name="title" id="standard-basic" label="Note title..." value={note.title} onChange={handleChanges} />
        )}
        <textarea className="note-form-textarea"
          onFocus={expand}
          onChange={handleChanges}
          name="note"
          value={note.note}
          placeholder="What's on your mind now? Take a note..."
          rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab className="note-form-button" onClick={clickSubmit}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default NewNote;
