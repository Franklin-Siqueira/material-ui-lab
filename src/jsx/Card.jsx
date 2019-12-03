/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/Card.jsx

*/
import React from "react";
//
import Avatar from "./Avatar";
import CardDetailInfo from "./CardDetailInfo";
//
function Card(props){
  return (
    <div className="card">
      <div className="top">
        <h3 className="name">{props.name}</h3>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <CardDetailInfo info={props.phone} />
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
};
export default Card;
