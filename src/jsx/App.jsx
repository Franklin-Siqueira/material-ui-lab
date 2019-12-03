/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/App.jsx

*/
import React, { Fragment, useState } from "react";
//
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faClipboard } from "@fortawesome/free-solid-svg-icons";
//
import Menu from "./Menu";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note/Note";
import NewNote from "./note/NewNote";
import Card from "./Card";
import TodoList from "./TodoList";
import EmojiDictionary from "./EmojiDictionary";
import CarsRenderer from "../lab/DestructureArrays";
//
import notes from "../data/notes.js";
import contacts from "../data/contacts.js";
import emojipedia from "../data/emojipedia.js";
//
// import HideAppBar from "../lab/material/AppToolBarScrollHide.jsx";
import PrimarySearchAppBar from "./components/common/AppToolBarWithIcons.jsx";
import FrameDeferring from "../lab/tests/FrameDeferring.js";
import SpeedDialTooltipOpen from "../lab/material/Speeddial.jsx";
import DatePickers from "../lab/material/DatePickerNative.jsx";
import CenteredGrid from "../lab/material/GridExample.jsx";
import FullWidthGrid from "../lab/material/GridFullWidth.jsx";
//

import MaterialTableDemo from "../lab/material/TableMaterial.jsx";
import CustomizedTables from "../lab/material/TableCustomized.jsx";
import SpanningTable from "../lab/material/TableSpanning.jsx";
import StickyHeadTable from "../lab/material/TableFixedHeader.jsx";

//
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
//
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// SpeedDial
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
// Drawer
import clsx from "clsx";
import useStylesDrawer from "./components/common/useStylesDrawerPersistent.js";
//
// const usedStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: "center",
//     // color: theme.palette.text.secondary,
//   },
// }));
// FontAwesome library
library.add(fab, faCheckSquare, faCoffee, faClipboard);
//
var isLogged = true;
var isRegistered = true;
//
// const classes = usedStyles();
//
function App() {
  //
  const [notes, setNotes] = useState([]);
  //
  function addNote(note){
    //
    setNotes(prevNotes => ([ ...prevNotes, note ]));
  }
  //
  function deleteNote(id){
    //
    setNotes(prevNotes => {
        return prevNotes.filter((note, index) => {
          return index !== id;
        }); // end filter
      }); // end setNotes
  }
  // Substituted <Header />
  const classesDrawer = useStylesDrawer();
  const [open, setOpen] = React.useState(false);
  //
  return (
    <div style={{ width: "100%" }}>
      <PrimarySearchAppBar />
      {isLogged && isRegistered ? (
        <Fragment>
          <main className={clsx(classesDrawer.content, {[classesDrawer.contentShift]: open,})}>
            <div className={classesDrawer.drawerHeader} />
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <Box>
                <NewNote onAdd={addNote} />
              </Box>
              {notes.map((notes, i) => (
                <Box>
                  <Note key={i} id={i} title={notes.title} note={notes.note} agent={notes.agent} date={notes.date} onDelete={deleteNote}/>
                </Box>
                ))}
                <div>
                  <SpeedDialTooltipOpen />
                </div>
            </Box>

            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              {contacts.map((contacts, i) => (
                <Box>
                  <Card key={i} id={i} name={contacts.name} img={contacts.imgURL} phone={contacts.phone} email={contacts.email} />
                </Box>
              ))}
              <div>
                <SpeedDialTooltipOpen />
              </div>
            </Box>

            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              {emojipedia.map((emojipedia, i) => (
                <Box>
                  <EmojiDictionary key={i} name={emojipedia.name} emoji={emojipedia.emoji} meaning={emojipedia.meaning} />
                </Box>
                ))}
                <div>
                  <SpeedDialTooltipOpen />
                </div>
            </Box>

            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <CarsRenderer />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <TodoList />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="blue">
              <FrameDeferring />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <SpeedDialTooltipOpen />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <DatePickers />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <CenteredGrid />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <FullWidthGrid />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <CustomizedTables />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <StickyHeadTable />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <MaterialTableDemo />
            </Box>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" p={1} m={1} bgcolor="background.paper">
              <SpanningTable />
            </Box>

          </main>
        </Fragment>
        ) : <Login title={isRegistered ? "Login" : "Register"} isSignedIn={isLogged} isSignedUp={isRegistered}/>}
      <Footer />
    </div>
  );
}
export default App;
//
// -------------------- Testing map() with substring() function
// const newEmojipediaMeaning = emojipedia.map(function (ePediaEntry) {
//   return ePediaEntry.meaning.substring(0, 100);
// });
// console.log(newEmojipediaMeaning);
// --------------------------------------------------------------
// <Card
//       name={contacts[0].name}
//       img={contacts[0].imgURL}
//       phone={contacts[0].phone}
//       email={contacts[0].email}
//       />
