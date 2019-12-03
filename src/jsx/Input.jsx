/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/Login.jsx

*/
import React, { Fragment }  from "react";
//
function Input(props) {
  return ( <div>
            {props.onChange ?
                (<input
                onChange={props.onChange}
                name={props.name}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder} />) :
                <input
                name={props.name}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder} />
            }
        </div>
      );
}
//
export default Input;
