/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/Login.jsx

*/
import React, { useState } from "react";
//
import Input from "./Input";
//const myName = "Franklin";
//
function Login(props){
  // useState variables/objects/methods
  const [buttonColor, setButtonColor] = useState(false);
  const [contact, setContact] = useState({fName: "", lName: "", email: "", password: "", rPassword: "" });
  // Functions to handle useState variables/objects/methods
  // Using spread (...) instead of the function below...
  // Shortest option
  function handleInputChange(event){
    const { name, value } = event.target;
    setContact(prevValue => ({ ...prevValue, [name]: value }));
  }
  // function handleInputChange(event){
  //   const { name, value } = event.target;
  //   setContact((prevValue) => {
  //     return { ...prevValue, [name]: value};
  //     }
  //   );
  // }
  // function handleInputChange(event){
  //   const {name, value} = event.target;
  //   setContact((prevValue) => {
  //     if (name === "fName") {
  //       return { fName: value, lName: prevValue.lName, email: prevValue.email, password: prevValue.password, rPassword: prevValue.rPassword };
  //     } else if (name === "lName") {
  //       return { fName: prevValue.fName, lName: value, email: prevValue.email, password: prevValue.password, rPassword: prevValue.rPassword };
  //     } else if (name === "email") {
  //       return { fName: prevValue.fName, lName: prevValue.lName, email: value, password: prevValue.password, rPassword: prevValue.rPassword };
  //     } else if (name === "password") {
  //       return { fName: prevValue.fName, lName: prevValue.lName, email: prevValue.email, password: value, rPassword: prevValue.rPassword };
  //     } else if (name === "rPassword") {
  //       return { fName: prevValue.fName, lName: prevValue.lName, email: prevValue.email, password: prevValue.password, rPassword: value };
  //     }
  //   });
  // }
  function altButtonStateMOver(){
      setButtonColor(true);
  }
  function altButtonStateMOut(){
      setButtonColor(false);
  }
  //
  return (
      <div className="form-conteiner-body">
        <form className="form-conteiner">
          <h1 className="form-container-h1">{props.title}</h1>
          {!props.isSignedUp && <Input onChange={handleInputChange} name="fName" value={contact.fName} type="text" placeholder="Your first name here..." />}
          {!props.isSignedUp && <Input onChange={handleInputChange} name="lName" value={contact.lName} type="text" placeholder="Your last name here..." />}
          <Input onChange={handleInputChange} name="email" value={contact.email} type="email" placeholder="Your e-mail here..." />
          <Input name="password" type="password" placeholder="Your password here..." />
          {!props.isSignedUp && <Input onChange={handleInputChange} name="rPassword" value={contact.rPassword} type="password" placeholder="Confirm password here..." />}
          <button
                type="submit"
                  onMouseOver={altButtonStateMOver}
                    onMouseOut={altButtonStateMOut}
                      style={{ backgroundColor: buttonColor ? "black" : "white" }}>
                Submit...
          </button>
        </form>
      </div>
  );
};
export default Login;
