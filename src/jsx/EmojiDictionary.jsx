/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/EmojiDictionary.jsx

*/
import React from "react";
//
function EmojiDictionary(props){
  return (
      <div>
        <dl className="dictionary">
          <div className="term">
              <dt>
                <span className="emoji" role="img" aria-label={props.emoji}>{props.emoji}</span>
                <span>{props.name}</span>
              </dt>
              <dd>
                {props.meaning}
              </dd>
          </div>
        </dl>
      </div>);
}
export default EmojiDictionary;
