/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/Footer.jsx

*/
import React, { useState } from "react";
//
const currDate = new Date();
//
function Footer() {
  const [localTime, setLocaltime] = useState(currDate.toLocaleTimeString());
  //
  const updateLocalTime = () => {
      const getTimeNow = new Date().toLocaleTimeString();
      setLocaltime(getTimeNow);
  };
  setInterval(updateLocalTime, 10000); // Updates localTime every 10s (10,000 milisseconds)
  return (
    <footer>
        <hr />
        <p>Copyright © {currDate.getFullYear()} .@it - <span>Current local time: {localTime}</span></p>
      </footer>
  );
};
export default Footer;
//<p style={myStyle}>Created by {myName}</p>
